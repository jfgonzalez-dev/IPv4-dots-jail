# IPv4 Dots Jail

A lightweight Chromium extension that securely copies selected text to your clipboard while automatically defanging IPv4 addresses. 

When documenting or sharing potentially malicious infrastructure, this tool ensures that IP addresses cannot be accidentally clicked or resolved by wrapping their periods in square brackets (e.g., `192.168.1.1` becomes `192[.]168[.]1[.]1`).

## Usage

1. Highlight any text on a webpage containing IP addresses.
2. Press `Alt + C` (default shortcut).
3. The sanitized text is immediately copied to your clipboard, ready to be pasted into your reports or SIEM.

## Installation

### Manual / Developer Mode
1. Clone this repo.
2. Open your Chromium-based browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** via the toggle in the top right corner.
4. Click **Load unpacked** and select the folder containing the extension files.

## Permissions Justification

This extension operates on a principle of least privilege:
* `activeTab`: Required to read the specific text you have highlighted on the current page.
* `scripting`: Required to execute the temporary script that formats the IPs and writes them to your clipboard.
