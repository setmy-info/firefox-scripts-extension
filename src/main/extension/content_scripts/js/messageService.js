const smiMessageService = {
    send: function (message) {
        browser.runtime.sendMessage(message)
            .then(response => {
                console.log("Message sent to options page, response:", response);
            })
            .catch(error => {
                console.error("Failed to send message to options page:", error);
            });
    }
};
