const BLACKLIST_URL = "https://raw.githubusercontent.com/theilkerm/boykot-bar/main/eklenti/blacklist.json?t=" + Date.now();
let blacklist = [];

// Blacklist'i güvenli şekilde yükler
async function fetchBlacklist() {
  try {
    const response = await fetch(BLACKLIST_URL);
    if (!response.ok) throw new Error(`HTTP hatası: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Geçersiz veri formatı");
    
    blacklist = data;
    console.log("Blacklist güncellendi", blacklist.slice(0, 3)); // Log kirliliğini önle
  } catch (error) {
    console.error("Blacklist yüklenemedi:", error);
    blacklist = []; // Hata durumunda sıfırla
  }
}

// Sayfa yüklendiğinde tetiklenir
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url?.startsWith("http")) {
    try {
      // Blacklist boşsa yeniden çek
      if (blacklist.length === 0) await fetchBlacklist();

      // URL kontrolü
      const url = new URL(tab.url);
      const blockedSite = blacklist.find(entry => entry.url && url.hostname.includes(entry.url));

      // URL uyarısı
      if (blockedSite) {
        showUrlWarning(tabId, blockedSite);
      }

      // Kelime kontrolü için content script'e mesaj gönder
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ['content.js'] // Content script enjekte et
      });

      chrome.tabs.sendMessage(tabId, {
        type: "checkForBlacklistedWords",
        blacklist: blacklist.filter(entry => entry.name) // Sadece name olanları gönder
      }).catch(err => console.debug("Content script iletişim hatası:", err));

    } catch (error) {
      console.error("Sayfa kontrol hatası:", error);
    }
  }
});

// URL uyarısını gösterir
function showUrlWarning(tabId, blockedSite) {
  const messageParts = [
    `BOYKOT SİTESİ: ${blockedSite.name || "Bilinmiyor"}`,
    blockedSite.sector && `| Sektör: ${blockedSite.sector}`,
    blockedSite.boycott_reason && `| Sebep: ${blockedSite.boycott_reason}`,
    blockedSite.alternative && `| Alternatif: ${blockedSite.alternative}`
  ].filter(Boolean);

  chrome.scripting.executeScript({
    target: { tabId },
    func: (message) => {
      if (document.getElementById("boykot-url-uyari")) return;
      
      const bar = document.createElement("div");
      bar.id = "boykot-url-uyari";
      Object.assign(bar.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#ff0000",
        color: "white",
        textAlign: "center",
        padding: "10px",
        zIndex: "9999",
        fontSize: "14px",
        fontWeight: "bold"
      });

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "×";
      closeBtn.onclick = () => bar.remove();
      
      bar.textContent = message;
      bar.appendChild(closeBtn);
      document.body.style.paddingTop = "50px";
      document.body.prepend(bar);
    },
    args: [messageParts.join(" ")]
  });
}

// 30 dakikada bir blacklist'i yenile
chrome.alarms.create("blacklistRefresh", { periodInMinutes: 30 });
chrome.alarms.onAlarm.addListener(fetchBlacklist);

// İlk yüklemede blacklist'i çek
fetchBlacklist();