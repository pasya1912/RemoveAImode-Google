# Hide Google AI Mode & AI Website Blocker (Chrome & Firefox)

A lightweight browser extension (Manifest V3) compatible with **Mozilla Firefox** and **Chromium browsers** (Chrome, Brave, Edge, Opera, Vivaldi) that:
1. **Hides Google AI Mode UI**: Hides the **"AI mode"** navigation button and the **"Ask anything"** prompt bar on Google Search, while keeping the **AI Overview** answer completely visible.
2. **Blocks Popular AI Chat Websites**: Halts and blocks direct access to major AI chat platforms (ChatGPT, DeepSeek, Google Gemini, Claude, Copilot, Perplexity, Grok, etc.) to prevent distractions and accidental visits.

## Features
- **Cross-Browser Compatibility**: Works directly on Mozilla Firefox (v109+) and all Chromium-based browsers without separate codebases.
- **AI Chat Website Blocker**:
  - Automatically intercepts and blocks visits to:
    - **ChatGPT** (`chatgpt.com`, `chat.openai.com`)
    - **DeepSeek** (`deepseek.com`, `chat.deepseek.com`)
    - **Google Gemini** (`gemini.google.com`)
    - **Claude** (`claude.ai`)
    - **Microsoft Copilot** (`copilot.microsoft.com`)
    - **Perplexity AI** (`perplexity.ai`)
    - **Grok / xAI** (`grok.com`, `x.ai`)
    - **Poe** (`poe.com`)
    - **Mistral Le Chat** (`chat.mistral.ai`)
    - **Character.ai** (`character.ai`)
  - Halts page scripts and requests instantly at `document_start`.
  - Displays a clean, dark-mode blocked screen.
  - Can be toggled on/off on the fly from the extension popup.
- **Protects AI Overviews on Google**: Never removes or hides the AI Overview summary content.
- **Hides "AI mode" Tab/Button**: Removes the navigation button so you don't accidentally navigate into AI Mode.
- **Hides "Ask anything" Prompt**: Removes the bottom dock prompt container under the AI Overview.
- **Works on All Google Domains**: Covers all 196+ Google global and country-code domains (e.g., `google.com`, `google.co.id`, `google.co.uk`, `google.de`, etc.).
- **Zero Lag / No Flicker**: Uses both immediate CSS styling and a throttled `MutationObserver` alongside a safety interval fallback.
- **Customizable Popup**: Easily toggle hiding of the AI Mode button, the Ask Anything box, or the AI Website Blocker.

---

## How to Install in Your Browser

### 1. Mozilla Firefox
1. Open Firefox and type `about:debugging` in the address bar, then press **Enter**.
2. Click **"This Firefox"** in the left sidebar.
3. Click the **"Load Temporary Add-on..."** button.
4. In the file picker, navigate to:
   ```
   D:\project\RemoveAImode
   ```
   and select the `manifest.json` file.
5. The extension will be loaded immediately into Firefox!

> **Tip for Firefox**: Temporary add-ons stay active until Firefox is restarted. To install permanently for personal use, you can package the files into a `.zip` (rename extension to `.xpi`) and sign it via [addons.mozilla.org (AMO)](https://addons.mozilla.org/developers/) (choose "On your own / Unlisted" for instant self-distribution), or load it in Firefox Developer Edition / Nightly with `xpinstall.signatures.required` set to `false` in `about:config`.

---

### 2. Google Chrome / Brave / Edge / Opera / Vivaldi
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

### 1. Google Search AI Elements
1. Go to any Google search that triggers an AI Overview (e.g., `https://www.google.com/search?q=what+is+quantum+computing`).
2. Verify:
   - The AI Overview answer remains clearly visible.
   - The "AI mode" tab/button in the top header is hidden.
   - The "Ask anything" input box at the bottom of the overview is hidden.

### 2. AI Website Blocker
1. Try visiting any popular AI website:
   - `https://chatgpt.com`
   - `https://chat.deepseek.com`
   - `https://gemini.google.com`
   - `https://claude.ai`
2. Notice the page immediately halts and displays the clean **"AI Website Blocked"** screen.
3. Click the extension icon in your browser toolbar and toggle **"Block AI chat websites"** off.
4. The page will instantly refresh and become accessible!
