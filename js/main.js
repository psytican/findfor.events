function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.onload = function() {
        console.log(`Script loaded: ${url}`);
    };
    script.onerror = function() {
        console.error(`Failed to load script: ${url}`);
    };
    document.head.appendChild(script);
}

const CACHE_NAME = 'findfor.events--cache-version--3';

loadScript("/js/service-worker/add-listener.js");
loadScript("/js/dictionaries/countries.js");
loadScript("/js/behaviours/input_suggestions.js");

loadScript("/js/behaviours/field_country.js");


