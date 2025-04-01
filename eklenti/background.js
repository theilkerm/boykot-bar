const BLACKLIST_URL = "https://raw.githubusercontent.com/theilkerm/boykot-bar/main/eklenti/blacklist.json";
let blacklist = [];

async function fetchBlacklist() {
  try {
    let response = await fetch(BLACKLIST_URL);
    blacklist = await response.json(); // Artık JSON olarak çekiyoruz
    console.log("Blacklist güncellendi.", blacklist);
  } catch (error) {
    console.error("Blacklist yüklenemedi:", error);
  }
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (blacklist.length === 0) await fetchBlacklist();
    const url = new URL(tab.url);
    let blockedSite = blacklist.find(entry => entry.url && url.hostname.includes(entry.url));
    if (blockedSite) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: showWarning,
        args: [
          `BOYKOT SİTESİ: ${blockedSite.name}` +
          (blockedSite.sector ? ` | Sektör: ${blockedSite.sector}` : "") +
          (blockedSite.boycott_reason ? ` | Sebep: ${blockedSite.boycott_reason}` : "") +
          (blockedSite.alternative ? ` | Alternatif: ${blockedSite.alternative}` : "")
        ]
      });
    }
  }
});

function showWarning(message) {
  let bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.width = "100%";
  bar.style.backgroundColor = "red";
  bar.style.color = "white";
  bar.style.textAlign = "center";
  bar.style.padding = "10px";
  bar.style.zIndex = "9999";
  bar.innerText = message;
  document.body.prepend(bar);
  document.body.style.marginTop = "50px"; // İçeriği aşağı kaydır
}