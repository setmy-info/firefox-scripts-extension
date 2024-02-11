console.log("Loader scripts");

function smiExtensionInit() {
    smiInitMessageListener();
    document.body.style.border = "5px solid red";
}

function smiInitMessageListener() {
    browser.runtime.onMessage.addListener((message) => {
        console.log("Received message from options page:", message);
    });
}

function main() {
    let result = smiTextSearchService.parseAllTexts();
    console.log(result);
    smiMessageService.send({texts: result});
}

smiExtensionInit();
main();
