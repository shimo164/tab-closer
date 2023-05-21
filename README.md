# tab-closer
Chrome extension: Automatically close unwanted tabs using custom keywords and a user-defined timer.

## Icon
![](tab-closer/icons/icon48.png)

## How to Install the Chrome Extension in Developer Mode

1. Download the extension folder to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on the **Load unpacked** button.
5. Browse to the downloaded extension folder, select it, and click **Open**.
6. The extension will now be installed in Developer mode.

For more information on using Chrome extensions in Developer mode, you can visit the [Google Chrome Enterprise Help page](https://support.google.com/chrome/a/answer/2714278?hl=en).

## Usage
Tab Closer extension automatically closes the tabs based on the custom keywords defined by the user and a set delay time. To configure the settings, right-click on the extension icon in the toolbar and click on 'Options'.

**Delay Time:** Set the delay time before the extension closes the tab with the specified keywords in the URL. Input the number of seconds in the 'Delay Time' input box. By default, the delay time is 5 seconds. The minimum time is 1 second.

**Keyword Blacklist:** List the keywords that the extension should check in the URL of the tabs. Enter each keyword on a new line in the 'Keyword Blacklist' text area. By default, 'teams.microsoft.com/dl/launcher/launcher.html' is added as a blacklisted keyword.

**Enable Extension:** Toggle the switch to enable or disable the extension. By default, the extension is enabled.

## Contributing

Contributions to this project are warmly welcomed! Please feel free to open an issue or submit a pull request.
