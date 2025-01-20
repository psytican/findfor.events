class Notification {
    static error(message, callback) {
        window.alert(message);
        if (callback instanceof Function) {
            callback(false);
        }
    }

    static success(message, callback) {
        console.log(message);
    }
}