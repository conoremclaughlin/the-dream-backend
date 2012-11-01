var mongoose = require('mongoose');

model = models.Base;

model.prototype.dbSchema = model.dbSchema = {};

// Initialize the database methods and properties for the model.
model.augment({
    initialize: function(parent) {
        parent.call(this);
        model.permissions = ;
        if (!Bones.plugin.app || !Bones.plugin.app.db) { console.error('ERROR: no backend available.'); }
        // bones is awesome so it exposes a model's title for our use :]
        this.db = new Bones.plugin.app.db(this.title, new mongoose.Schema(this.dbSchema));
    }
});

// Initialize permission methods for schema property paths.
model.prototype.permissions = {
    'read':   {},
    'create': {},
    'update': {},
    'delete': {}
};