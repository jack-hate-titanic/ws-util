module.exports = {
  get: function (name) {
    if (!name) return;
    return window.localStorage.getItem(name);
  },

  set: function (name, content) {
    if (!name) return;
    if (typeof content !== "string") {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  delete: function (name) {
    if (!name) return;
    window.localStorage.removeItem(name);
  },
};
