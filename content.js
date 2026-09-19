(() => {
  'use strict';

  // Default configuration
  let config = {
    hideAIMode: true,
    hideAskAnything: true
  };

  // Cross-browser storage API support
  const storageAPI = (typeof chrome !== 'undefined' && chrome.storage)
    ? chrome.storage
    : (typeof browser !== 'undefined' && browser.storage ? browser.storage : null);

  // Load preferences from storage
  if (storageAPI && storageAPI.sync) {
    storageAPI.sync.get(['hideAIMode', 'hideAskAnything'], (items) => {
      if (items) {
        if (items.hideAIMode !== undefined) config.hideAIMode = items.hideAIMode;
        if (items.hideAskAnything !== undefined) config.hideAskAnything = items.hideAskAnything;
        cleanup();
      }
    });

    // Listen for real-time toggle changes from the popup
    if (storageAPI.onChanged) {
      storageAPI.onChanged.addListener((changes, area) => {
        if (area === 'sync') {
          if (changes.hideAIMode) config.hideAIMode = changes.hideAIMode.newValue;
          if (changes.hideAskAnything) config.hideAskAnything = changes.hideAskAnything.newValue;
          cleanup();
        }
      });
    }
  }

  function cleanupAIMode() {
    if (!config.hideAIMode) return;

    // 1. Original user pattern: div div span span with "AI mode"
    document.querySelectorAll('div div span span').forEach((span) => {
      const text = span.textContent?.trim().toLowerCase();
      if (text === 'ai mode') {
        const target = span.closest('div')?.parentElement?.closest('div');
        if (target && target !== document.body && target !== document.documentElement) {
          target.remove();
        }
      }
    });

    // 2. Additional resilience: buttons, tabs, or links explicitly labeled "AI mode"
    document.querySelectorAll('a, button, [role="tab"], [role="listitem"]').forEach((el) => {
      const text = el.textContent?.trim().toLowerCase();
      if (text === 'ai mode') {
        // Prevent accidental removal of top-level containers
        if (el !== document.body && !el.id?.includes('search') && !el.id?.includes('rso')) {
          el.remove();
        }
      }
    });
  }

  function cleanupAskAnything() {
    if (!config.hideAskAnything) return;

    // Matches 'Ask anything', 'Ask anything...', case-insensitive
    const textareas = document.querySelectorAll(
      'textarea[placeholder*="Ask anything" i], input[placeholder*="Ask anything" i], textarea[placeholder*="Ask a follow" i]'
    );

    textareas.forEach((textarea) => {
      let div = textarea.closest('div');
      for (let i = 1; i < 4; i++) {
        div = div?.parentElement?.closest('div');
      }

      if (div && div !== document.body && div !== document.documentElement) {
        div.remove();
      }
    });
  }

  function cleanup() {
    cleanupAIMode();
    cleanupAskAnything();
  }

  // Run cleanup as early as possible
  cleanup();

  // Throttled observer for instant removal on DOM mutations
  let isScheduled = false;
  const observer = new MutationObserver(() => {
    if (!isScheduled) {
      isScheduled = true;
      requestAnimationFrame(() => {
        cleanup();
        isScheduled = false;
      });
    }
  });

  function startObserver() {
    if (document.body || document.documentElement) {
      observer.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMContentLoaded', startObserver, { once: true });
    }
  }

  startObserver();

  // Safety interval fallback (same as core.js) to catch any lazy-loaded elements
  setInterval(cleanup, 1000);

  console.log('[Hide Google AI Mode] Active - Monitoring DOM');
})();
