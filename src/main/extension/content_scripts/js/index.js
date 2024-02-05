console.log("Loader scripts");
document.body.style.border = "5px solid red";

const extensionStorage = browser.storage.local;
const keyName = "firefoxScriptExtensionValue";

function loadValue() {
    /*
    extensionStorage.get(keyName)
        .then(function (obj) {
            if (!!obj[keyName]) {
                let url = "https://setmy-info.codeberg.page/index.js"; //C:\sources\setmy.info\submodules\firefox-scripts-extension\web-ext-artifacts\firefox-scripts-extension-0.1.0.zip
                console.log("Load url: ", url)
                loadScript(url);
            } else {
                loadScript("https://setmy-info.codeberg.page/index.js");
            }
        }, function (error) {
            console.error(`Error: ${error}`);
        });
    */
}

function loadScript(url) {
    /*
    const targetUrl = 'http://localhost:5000';
    const postData = {
        key1: 'value1',
        key2: 'value2',
    };
    fetch(targetUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Vastus serverist:', data);
        })
        .catch(error => {
            console.error('Viga:', error);
        });
    */
    /*
    fetch(url)
        .then(response => response.text())
        .then(scriptText => {
            eval(scriptText);
            const script = document.createElement('script');
            script.textContent = scriptText;
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading external script:', error));
    /*
    const script = document.createElement('script');
    script.src = url;
    script.onload = function () {
        console.log(`JavaScripti file ${url} loaded.`);
    };
    script.onerror = function () {
        console.error(`Error on ${url} file loading.`);
    };
    document.head.appendChild(script);
    */
}

loadValue();
