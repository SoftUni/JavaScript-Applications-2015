Storage.prototype.setObject = function setObject(key, obj) {
    this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObject = function getObject(key) {
    return JSON.parse(this.getItem(key));
};