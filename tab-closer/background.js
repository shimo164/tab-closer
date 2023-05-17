function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function findKeywords(url, keywordBlacklistUrl) {
  let isFound = false;

  keywordBlacklistUrl.forEach((key) => {
    if (url.includes(key)) {
      isFound = true;
    }
  });

  return isFound;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    let url = tab.url;

    chrome.storage.local.get(
      ['delayTime', 'keywordBlacklist', 'isEnabled'],
      (data) => {
        if (data.isEnabled === false) {
          return; // Do nothing if the extension is disabled
        }

        const delayTime = data.delayTime || 5000;
        const keywordBlacklistUrl = data.keywordBlacklist || [
          'teams.microsoft.com/dl/launcher/launcher.html',
        ];

        if (findKeywords(url, keywordBlacklistUrl)) {
          delay(delayTime).then(() => {
            chrome.tabs.query(
              { active: true, lastFocusedWindow: true },
              (tabs) => {
                let currentTab = tabs.find((t) => t.id === tabId);
                if (currentTab) {
                  chrome.tabs.remove(tabId);
                }
              },
            );
          });
        }
      },
    );
  }
});
