servers.Core.augment({
    initialize: function(parent, app) {
        parent.call(this, app);
        this.use(new servers['App'](app));
    }
});