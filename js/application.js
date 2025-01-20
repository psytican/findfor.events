const CACHE_NAME = 'findfor.events--cache-version--3';

class Application {
    script = null;
    storage = null;
    constructor() {
        const self = this;

        this.script = script
        this.script.load('/js/service-worker/add-listener.js');
        this.script.load('/js/dictionaries/countries.js');
        this.script.load('/js/behaviours/input-suggestions.js');
        this.script.load('/js/behaviours/field-country.js');

        this.script.load('/js/storage.js', function (isLoaded) {
            if(isLoaded === true){
                self.storage = storage;
            }
        });
    }
}

window.application = new Application();