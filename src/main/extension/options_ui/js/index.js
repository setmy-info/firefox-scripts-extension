function init() {
    browser.runtime.onMessage.addListener(function (message) {
        console.log("Received message from content script:", message);
    });
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("saveButton").addEventListener("click", function (event) {
            event.preventDefault();
            saveValue(document.getElementById(SERVER_URL_KEY).value);
        });
        loadValue();
    });
}

function saveValue(value) {
    return optionsStorageService.set(value);
}

function loadValue() {
    optionsStorageService.get()
        .then(function (obj) {
            console.log("Obj: ", obj)
            document.getElementById(SERVER_URL_KEY).value = obj;
        })
        .catch(function (error) {
            console.log("Error: ", error)
        });
}

init();
