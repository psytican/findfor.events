class Script {
    static load(url, callback) {
        const script = document.createElement("script");
        script.src = url;
        script.type = "text/javascript";
        script.onload = function () {
            console.log(`Script loaded: ${url}`);
            if (callback instanceof Function) {
                callback(true);
            }
        };
        script.onerror = function () {
            console.error(`Failed to load script: ${url}`);
            if (callback instanceof Function) {
                callback(false);
            }
        };
        document.head.appendChild(script);
    }
}