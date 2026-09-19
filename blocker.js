(() => {
  'use strict';

  let isBlocked = true;

  const storageAPI = (typeof chrome !== 'undefined' && chrome.storage)
    ? chrome.storage
    : (typeof browser !== 'undefined' && browser.storage ? browser.storage : null);

  function renderBlockedScreen() {
    try {
      window.stop();
    } catch (e) {}

    const hostname = window.location.hostname;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Blocked - AI Website</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0f172a;
      color: #f8fafc;
      padding: 24px;
    }
    .card {
      max-width: 480px;
      width: 100%;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 32px 28px;
      text-align: center;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    }
    .icon-wrapper {
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      border-radius: 50%;
      background: rgba(239, 68, 68, 0.15);
      color: #ef4444;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-wrapper svg {
      width: 34px;
      height: 34px;
    }
    h1 {
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .site-tag {
      display: inline-block;
      background: #334155;
      color: #94a3b8;
      font-size: 13px;
      font-family: monospace;
      padding: 4px 10px;
      border-radius: 6px;
      margin-bottom: 18px;
      word-break: break-all;
    }
    p {
      font-size: 14px;
      color: #94a3b8;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .info-box {
      background: rgba(15, 23, 42, 0.6);
      border-radius: 8px;
      border: 1px solid #334155;
      padding: 12px 14px;
      font-size: 13px;
      color: #cbd5e1;
      text-align: left;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .footer-hint {
      font-size: 12px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon-wrapper">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    </div>
    <h1>AI Website Blocked</h1>
    <div class="site-tag">${hostname}</div>
    <p>Access to this AI platform has been blocked by your <strong>Hide Google AI Mode & Blocker</strong> extension settings.</p>
    <div class="info-box">
      ⚙️ <strong>Want to access this site?</strong><br>
      Click the extension icon in your browser toolbar and toggle off <em>"Block popular AI chat websites"</em>.
    </div>
    <div class="footer-hint">Protected against accidental visits & distractions</div>
  </div>
</body>
</html>
`;

    document.documentElement.innerHTML = html;
  }

  function checkAndBlock() {
    if (!storageAPI || !storageAPI.sync) {
      renderBlockedScreen();
      return;
    }

    storageAPI.sync.get({ blockAISites: true }, (items) => {
      isBlocked = items.blockAISites !== false;
      if (isBlocked) {
        renderBlockedScreen();
      }
    });

    if (storageAPI.onChanged) {
      storageAPI.onChanged.addListener((changes, area) => {
        if (area === 'sync' && changes.blockAISites) {
          if (changes.blockAISites.newValue === false) {
            window.location.reload();
          } else {
            renderBlockedScreen();
          }
        }
      });
    }
  }

  checkAndBlock();
})();
