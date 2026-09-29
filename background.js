chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "capture-dots") return;
  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const selectedText = window.getSelection().toString();
        
        if (!selectedText) return;
        
        const sanitizedText = selectedText.replace(/(\d+)\.(\d+)\.(\d+)\.(\d+)/g,"$1[.]$2[.]$3[.]$4");
        
        navigator.clipboard.writeText(sanitizedText).catch(console.error);
      }
    });
  }
});