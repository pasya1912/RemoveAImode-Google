document.addEventListener('DOMContentLoaded', () => {
  const toggleAIMode = document.getElementById('toggleAIMode');
  const toggleAskAnything = document.getElementById('toggleAskAnything');
  const toggleBlockAISites = document.getElementById('toggleBlockAISites');

  const storageAPI = (typeof chrome !== 'undefined' && chrome.storage)
    ? chrome.storage
    : (typeof browser !== 'undefined' && browser.storage ? browser.storage : null);

  if (storageAPI && storageAPI.sync) {
    // Load saved preferences
    storageAPI.sync.get(
      {
        hideAIMode: true,
        hideAskAnything: true,
        blockAISites: true
      },
      (items) => {
        toggleAIMode.checked = items?.hideAIMode !== undefined ? items.hideAIMode : true;
        toggleAskAnything.checked = items?.hideAskAnything !== undefined ? items.hideAskAnything : true;
        if (toggleBlockAISites) {
          toggleBlockAISites.checked = items?.blockAISites !== undefined ? items.blockAISites : true;
        }
      }
    );

    // Save changes
    toggleAIMode.addEventListener('change', () => {
      storageAPI.sync.set({ hideAIMode: toggleAIMode.checked });
    });

    toggleAskAnything.addEventListener('change', () => {
      storageAPI.sync.set({ hideAskAnything: toggleAskAnything.checked });
    });

    if (toggleBlockAISites) {
      toggleBlockAISites.addEventListener('change', () => {
        storageAPI.sync.set({ blockAISites: toggleBlockAISites.checked });
      });
    }
  }
});
