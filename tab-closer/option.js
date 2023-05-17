document.addEventListener('DOMContentLoaded', () => {
  const delayTimeInput = document.getElementById('delayTime');
  const keywordBlacklist = document.getElementById('keywordBlacklist');
  const enableToggle = document.getElementById('enableToggle');
  const saveButton = document.getElementById('saveButton');

  chrome.storage.local.get(
    ['delayTime', 'keywordBlacklist', 'isEnabled'],
    (data) => {
      delayTimeInput.value = data.delayTime ? data.delayTime / 1000 : 5;
      keywordBlacklist.value = data.keywordBlacklist
        ? data.keywordBlacklist.join('\n')
        : 'teams.microsoft.com/dl/launcher/launcher.html';
      enableToggle.checked =
        data.isEnabled === undefined ? true : data.isEnabled;
    },
  );

  function displaySaveMessage() {
    const saveMessage = document.getElementById('saveMessage');
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(
      now.getMonth() + 1,
    ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(
      now.getHours(),
    ).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
      now.getSeconds(),
    ).padStart(2, '0')}`;
    saveMessage.textContent = `Saved at ${timestamp}`;
  }

  saveButton.addEventListener('click', () => {
    const delayTime = parseInt(delayTimeInput.value, 10) * 1000;
    const keywords = keywordBlacklist.value
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    const isEnabled = enableToggle.checked;

    chrome.storage.local.set(
      { delayTime, keywordBlacklist: keywords, isEnabled },
      displaySaveMessage,
    );
  });
});
