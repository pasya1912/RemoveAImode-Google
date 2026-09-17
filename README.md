# Hide Google AI Mode (Chromium Extension)

A lightweight Chromium extension (Manifest V3) that hides the **"AI mode"** navigation button and the **"Ask anything"** prompt bar on Google Search, preventing accidental clicks while keeping the **AI Overview** summary completely visible.

## Features
- **Protects AI Overviews**: Never removes or hides the AI Overview summary content.
- **Hides "AI mode" Tab/Button**: Removes the navigation button so you don't accidentally navigate into AI Mode.
- **Hides "Ask anything" Prompt**: Removes the bottom dock prompt container under the AI Overview.
- **Works on All Google Domains**: Covers all 196+ Google global and country-code domains (e.g., `google.com`, `google.co.id`, `google.co.uk`, `google.de`, etc.).
- **Zero Lag / No Flicker**: Uses both immediate CSS styling and a throttled `MutationObserver` alongside a safety interval fallback.
- **Customizable Popup**: Easily toggle hiding of the AI Mode button or the Ask Anything box on and off.

---

## How to Install in Your Browser

### 1. Google Chrome / Brave / Edge / Opera / Vivaldi
1. Open your browser and navigate to the extensions page:
   - **Chrome**: `chrome://extensions`
   - **Brave**: `brave://extensions`
   - **Edge**: `edge://extensions`
   - **Opera**: `opera://extensions`
2. Turn on **Developer mode** (toggle switch in the top-right corner).
3. Click the **"Load unpacked"** button.
4. In the file picker, select this project folder:
   ```
   D:\project\RemoveAImode
   ```
5. The extension **"Hide Google AI Mode"** will appear in your extension list!

---

## Testing & Verification
1. Go to any Google search that triggers an AI Overview (e.g. `https://www.google.com/search?q=what+is+quantum+computing`).
2. Verify:
   - The AI Overview answer is clearly visible.
   - The "AI mode" tab/button in the top header is hidden.
   - The "Ask anything" input box at the bottom of the overview is hidden.
3. Click the extension icon in your browser toolbar to open the settings popup and toggle features on or off as desired.
