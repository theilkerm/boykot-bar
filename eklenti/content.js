importScripts("blacklist.js");
let foundWords = blacklist.filter(entry => entry.name && document.body.innerText.includes(entry.name));
if (foundWords.length > 0) {
  let message = "BOYKOT KELİME: " + foundWords.map(entry => `${entry.name} (Sebep: ${entry.boycott_reason}, Alternatif: ${entry.alternative})`).join(", ");
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