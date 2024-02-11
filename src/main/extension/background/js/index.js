console.log("Background scripts");

function init() {
    // Page loaded in tab
    browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
            console.log("Loaded: ", tabId, tab);
            // browser.tabs.sendMessage(tabId, { command: "startContentScript" });
        }
    });
    // Listen messages
    browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log('Received message:', message);
        sendResponse({response: 'Received your message!'});
    });
}

init();
