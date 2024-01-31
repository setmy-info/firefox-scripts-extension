console.log("Loader scripts");
document.body.style.border = "5px solid red";

const extensionStorage = browser.storage.local;
const keyName = "firefoxScriptExtensionValue";

function loadValue() {
    extensionStorage.get(keyName)
        .then(function (obj) {
            if (!!obj[keyName]) {
                let url = obj[keyName].value;
                // loadScript(url);
            }
        }, function (error) {
            console.error(`Error: ${error}`);
        });
}

function loadScript(url) {
    const script = document.body.createElement('script');
    script.src = url;
    script.onload = function () {
        console.log(`JavaScripti file ${jsFileUrl} loaded.`);
    };
    script.onerror = function () {
        console.error(`Error on ${jsFileUrl} file loading.`);
    };
    document.head.appendChild(script);
}

loadValue();
