const CACHE_NAME = 'findfor.events--cache-version--3';

class Application {
    notification = null;
    script = null;
    storage = null;

    constructor() {
        const self = this;

        this.script = Script
        this.script.load('/js/service-worker/add-listener.js');
        this.script.load('/js/dictionaries/countries.js');
        this.script.load('/js/behaviours/input-suggestions.js');
        this.script.load('/js/behaviours/field-country.js');

        this.script.load('/js/Storage.js', function (isLoaded) {
            if (isLoaded === true) {
                self.storage = Storage;
            }
        });

        this.script.load('/js/Notification.js', function (isLoaded) {
            if (isLoaded === true) {
                self.notification = Notification;
            }
        });

        this.visibilityCallbackHandler();
    }

    visibilityCallbackHandler() {
        document.querySelectorAll('[data-visibility-callback]').forEach(item => {
            const callback = new Function(item.getAttribute('data-visibility-callback'));
            if (callback() === true) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        });
    }
}

window.application = new Application();