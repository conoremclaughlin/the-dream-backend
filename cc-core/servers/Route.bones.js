servers.Route.augment({
    initialize: function(parent, app) {
        this.assets.vendor.unshift(require.resolve('backbone.marionette/lib/backbone.marionette.js'));
        parent.call(this, app);
        this.use(new servers['App'](app));
        this.use(new servers['Center'](app));
        this.use(new servers['Point'](app));
    }
});