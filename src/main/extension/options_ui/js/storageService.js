const storageService = {

    set: function (name, value) {
        let obj = {};
        obj[name] = value;
        return browser.storage.local.set(obj);
    },

    get: function (name) {
        return new Promise(function (resolve, reject) {
            browser.storage.local.get(name)
                .then(function (obj) {
                    if (!!obj[name]) {
                        resolve(obj[name]);
                    } else {
                        reject("Object not found");
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}
