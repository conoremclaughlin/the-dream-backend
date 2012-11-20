var mongoose = require('mongoose');
var util = require('util');
var debug = require('debug')('cc-core:base');

model = models.Base;

model.prototype.dbSchema = model.dbSchema = {};

model.augment({
    initialize: function(parent) {
        parent.call(this);
        if (!Bones.plugin.app || !Bones.plugin.app.db) debug('initialize - no backend available.');

        // bones is awesome so it exposes a model's title for our use :)
        if (Bones.plugin.app.mongooseModels) {
            this.db = Bones.plugin.app.mongooseModels[this.constructor.title];
        }

        return this;
    },
    validate: function(parent, req, res, next) {
        var errors = parent ? parent.call(this) : true;
       /*
        * Example use of express-validator in model.validate()
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
        return errors;
    }
});

/**
 * Initialize permission methods for schema property paths.
 */
model.prototype.permissions = {
    'get':      {},
    'post':     {},
    'put':      {},
    'delete':   {}
};