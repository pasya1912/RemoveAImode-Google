document.addEventListener('DOMContentLoaded', () => {
  const toggleAIMode = document.getElementById('toggleAIMode');
  const toggleAskAnything = document.getElementById('toggleAskAnything');

  // Load saved preferences
  chrome.storage.sync.get(
    {
      hideAIMode: true,
      hideAskAnything: true
    },
    (items) => {
      toggleAIMode.checked = items.hideAIMode;
      toggleAskAnything.checked = items.hideAskAnything;
    }
  );

  // Save changes
  toggleAIMode.addEventListener('change', () => {
    chrome.storage.sync.set({ hideAIMode: toggleAIMode.checked });
  });

  toggleAskAnything.addEventListener('change', () => {
    chrome.storage.sync.set({ hideAskAnything: toggleAskAnything.checked });
  });
});
