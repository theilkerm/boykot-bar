// content.js - Sayfa içeriğini tarayarak boykot kelimelerini bulur

// background.js'den mesaj bekleyen listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "checkForBlacklistedWords") {
      try {
        const foundEntries = checkPageContent(message.blacklist);
        if (foundEntries.length > 0) {
          showWarning(createWarningMessage(foundEntries));
        }
        sendResponse({ success: true, foundCount: foundEntries.length });
      } catch (error) {
        console.error("Kelime kontrol hatası:", error);
        sendResponse({ success: false, error: error.message });
      }
      return true; // Async response için gerekli
    }
  });
  
  // Sayfa içeriğini tarar
  function checkPageContent(blacklist) {
    if (!Array.isArray(blacklist)) return [];
    
    const pageText = document.body.innerText.toLowerCase();
    return blacklist.filter(entry => {
      return entry.name && 
             pageText.includes(entry.name.toLowerCase()) && 
             !isInWarning(entry.name); // Uyarıda zaten varsa tekrar ekleme
    });
  }
  
  // Uyarı mesajını oluşturur
  function createWarningMessage(foundEntries) {
    return foundEntries.map(entry => {
      return [
        entry.name,
        entry.boycott_reason && `(Sebep: ${entry.boycott_reason})`,
        entry.alternative && `(Alternatif: ${entry.alternative})`
      ].filter(Boolean).join(" ");
    }).join(", ");
  }
  
  // Uyarı çubuğunu gösterir (background.js'dekiyle aynı stil)
  function showWarning(message) {
    if (document.getElementById("boykot-kelime-uyari")) return;
    
    const bar = document.createElement("div");
    bar.id = "boykot-kelime-uyari";
    Object.assign(bar.style, {
      position: "fixed",
      bottom: "0", // Üstte site uyarısı varsa altta göster
      left: "0",
      width: "100%",
      backgroundColor: "#d9534f",
      color: "white",
      textAlign: "center",
      padding: "10px",
      zIndex: "9998", // background.js'dekinden düşük
      fontSize: "14px",
      borderTop: "2px solid #ff0000"
    });
  
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.marginLeft = "15px";
    closeBtn.onclick = () => bar.remove();
    
    bar.textContent = "BOYKOT KELİME: " + message;
    bar.appendChild(closeBtn);
    document.body.appendChild(bar);
  }
  
  // Aynı kelime için çift uyarıyı önler
  function isInWarning(name) {
    const existingWarning = document.getElementById("boykot-kelime-uyari");
    return existingWarning?.textContent.includes(name);
  }