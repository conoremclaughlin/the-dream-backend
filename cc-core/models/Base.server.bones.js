// Mongoose integration. Booya.
mongoose = require('mongoose');

model = models.Base;

model.augment({
    initialize: function(parent) {
        parent.call(this);
        if (!Bones.plugin.app || !Bones.plugin.app.db) { console.error('ERROR: no backend available.'); }
        // bones is awesome so it exposes a model's title for our use :]
        this.db = new Bones.plugin.app.db(this.title, new mongoose.Schema(this.dbSchema));
    }
});