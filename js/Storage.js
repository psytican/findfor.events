class Storage {
    static ttl_default = 15;
    static set(key, value, ttl = this.ttl_default) {
        const item = {
            value: value,
            expiry: new Date().getTime() + (ttl * 1000)
        }

        localStorage.setItem(key, JSON.stringify(item));
    }

    static get(key, ttl = this.ttl_default) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);

        if(ttl > 0){
            item.expiry = new Date().getTime() + (ttl * 1000);
            localStorage.setItem(key, JSON.stringify(item));
        }else if (new Date().getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    }
}