var mongoose = require('mongoose');

model = models.Base;

model.prototype.dbSchema = model.dbSchema = {};

// Initialize the database methods and properties for the model.
model.augment({
    initialize: function(parent) {
        parent.call(this);
        if (!Bones.plugin.app || !Bones.plugin.app.db) { console.error('ERROR: no backend available.'); }
        // bones is awesome so it exposes a model's title for our use :]
        this.db = new Bones.plugin.app.db(this.title, new mongoose.Schema(this.dbSchema));
    },
    validate: function(parent, req, res, next) {
        var errors = parent ? parent.call(this) : true;
        /*
         * Example use of express-validator in model.validate() to both validate and sanitize.
         *
        req.assert('postparam', 'Invalid postparam').notEmpty().isInt();
        req.assert('getparam', 'Invalid getparam').isInt();
        req.assert('urlparam', 'Invalid urlparam').isAlpha();

        req.sanitize('postparam').toBoolean();

        errors = errors && req.validationErrors();
        if (errors) {
          res.send('There have been validation errors: ' + util.inspect(errors), 500);
          return;
        }
        // else
        return next();
        */
    }
});

// Initialize permission methods for schema property paths.
model.prototype.permissions = {
    'read':   {},
    'create': {},
    'update': {},
    'delete': {}
};

model.prototype