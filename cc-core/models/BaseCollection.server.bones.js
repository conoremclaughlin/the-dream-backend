collection = models.BaseCollection;

collection.augment({
    initialize: function(parent, app) {
        if (Bones.plugin.mongooseModels) {
            console.log('BaseCollection title: ', this.model.title);
            this.db = Bones.plugin.mongooseModels[this.model.title];
        }
        return parent.call(this, app);
    }
});