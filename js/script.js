class script {
    static load(url) {
        const script = document.createElement("script");
        script.src = url;
        script.type = "text/javascript";
        script.onload = function () {
            console.log(`Script loaded: ${url}`);
        };
        script.onerror = function () {
            console.error(`Failed to load script: ${url}`);
        };
        document.head.appendChild(script);
    }
}