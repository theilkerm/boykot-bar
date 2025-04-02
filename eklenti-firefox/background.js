const BLACKLIST_URL = "https://raw.githubusercontent.com/theilkerm/boykot-bar/main/eklenti/blacklist.json?t=" + Date.now();
let blacklist = [];

async function fetchBlacklist() {
  try {
    const response = await fetch(BLACKLIST_URL);
    if (!response.ok) throw new Error(`HTTP hatası: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Geçersiz veri formatı");
    
    blacklist = data;
    console.log("Blacklist güncellendi", blacklist.slice(0, 3));
  } catch (error) {
    console.error("Blacklist yüklenemedi:", error);
    blacklist = [];
  }
}

browser.webNavigation.onCompleted.addListener(async (details) => {
  if (details.url.startsWith("http")) {
    try {
      if (blacklist.length === 0) await fetchBlacklist();

      const url = new URL(details.url);
      const blockedSite = blacklist.find(entry => entry.url && url.hostname.includes(entry.url));

      if (blockedSite) {
        showUrlWarning(details.tabId, blockedSite);
      }

      browser.tabs.executeScript(details.tabId, {
        file: 'content.js'
      }).then(() => {
        browser.tabs.sendMessage(details.tabId, {
          type: "checkForBlacklistedWords",
          blacklist: blacklist.filter(entry => entry.name)
        }).catch(err => console.debug("Content script iletişim hatası:", err));
      });
    } catch (error) {
      console.error("Sayfa kontrol hatası:", error);
    }
  }
});

function showUrlWarning(tabId, blockedSite) {
  const messageParts = [
    `BOYKOT SİTESİ: ${blockedSite.name || "Bilinmiyor"}`,
    blockedSite.sector && `| Sektör: ${blockedSite.sector}`,
    blockedSite.boycott_reason && `| Sebep: ${blockedSite.boycott_reason}`,
    blockedSite.alternative && `| Alternatif: ${blockedSite.alternative}`
  ].filter(Boolean);

  browser.tabs.executeScript(tabId, {
    code: `
      if (document.getElementById("boykot-url-uyari")) return;
      
      const bar = document.createElement("div");
      bar.id = "boykot-url-uyari";
      bar.style.position = "fixed";
      bar.style.top = "0";
      bar.style.left = "0";
      bar.style.width = "100%";
      bar.style.backgroundColor = "#ff0000";
      bar.style.color = "white";
      bar.style.textAlign = "center";
      bar.style.padding = "10px";
      bar.style.zIndex = "9999";
      bar.style.fontSize = "14px";
      bar.style.fontWeight = "bold";

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "×";
      closeBtn.onclick = () => bar.remove();
      
      bar.textContent = ${JSON.stringify(messageParts.join(" "))};
      bar.appendChild(closeBtn);
      document.body.style.paddingTop = "50px";
      document.body.prepend(bar);
    `
  });
}

browser.alarms.create("blacklistRefresh", { periodInMinutes: 30 });
browser.alarms.onAlarm.addListener(fetchBlacklist);

fetchBlacklist();