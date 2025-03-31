importScripts("blacklist.js");
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    const url = new URL(tab.url);
    let blockedSite = blacklist.find(entry => entry.url && url.hostname.includes(entry.url));
    if (blockedSite) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: showWarning,
        args: [
          `BOYKOT SİTESİ: ${blockedSite.name} | Sektör: ${blockedSite.sector} | Sebep: ${blockedSite.boycott_reason} | Alternatif: ${blockedSite.alternative}`
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