// Mongoose integration. Booya

models.Base.augment({
    initialize: function(parent) {
        parent.call(this);
        this.back = Bones.plugin.app;
    }
});