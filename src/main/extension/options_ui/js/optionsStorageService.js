const optionsStorageService = {
    set: function (obj) {
        return storageService.set(SERVER_URL_KEY, obj);
    },
    get: function () {
        return storageService.get(SERVER_URL_KEY);
    }
}
