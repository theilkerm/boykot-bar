chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "updateBlacklist") {
      let foundWords = message.blacklist.filter(entry => entry.name && document.body.innerText.includes(entry.name));
      if (foundWords.length > 0) {
        let warningMessage = "BOYKOT KELİME: " + foundWords.map(entry => `${entry.name}` +
          (entry.boycott_reason ? ` (Sebep: ${entry.boycott_reason})` : "") +
          (entry.alternative ? ` (Alternatif: ${entry.alternative})` : "")
        ).join(", ");
        showWarning(warningMessage);
      }
    }
  });