servers.Core.augment({
    initialize: function(parent, app) {
        parent.call(this, app);
        this.use(new servers['App'](app));
        this.use(new servers['Center'](app));
        this.use(new servers['Point'](app));
    }
});