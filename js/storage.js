class storage {
    static set(key, value, ttl) {
        const item = {
            value: value,
            expiry: new Date().getTime() + (ttl * 1000)
        }

        localStorage.setItem(key, JSON.stringify(item));
    }

    static get(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        if (new Date().getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    }
}