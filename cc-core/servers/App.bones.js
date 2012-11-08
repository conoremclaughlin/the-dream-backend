var mongoose = require('mongoose');

server = servers.Base.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'index', 'debug', 'initializeBackends');
    // TODO: move to bones-boiler
    Bones.plugin.preflightTaskList = [];
    Bones.plugin.preflightTaskList.push(this.initializeBackends);

    this.get('/', this.index, this.sendPage);

    //console.log('debug app: ', app);
    //console.log('debug this (App server): ', this);
    // globally expose the main application server (this).
    Bones.plugin.app = this;
    return this;
};

server.prototype.initializeBackends = function(next) {
    var config = Bones.plugin.config,
        db;
    db = mongoose.createConnection(config.mongoHost, config.mongoName, config.mongoPort);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // yay! register mongoose models for semi-mixins with server-side backbone models.
        try {
            Bones.plugin.app.mongooseModels = {};
            _.each(models, function(model) {
                // for collection querying, need to add the db.model template to the collection
                if (model && model.prototype.dbSchema) {
                    Bones.plugin.app.mongooseModels[model.title] = db.model(model.title, new mongoose.Schema(model.prototype.dbSchema));
                }
            });
            Bones.sync = Bones.plugin.backends.Mongoose.sync;

            next();
        } catch(err) {
            next('error creating model for schema - ' + model.schema + ' - with error: ' + err);
        }
    });
    this.db = db;
};

server.prototype.index = function(req, res, next) {
    res.locals.main = templates.Index();
    return next();
};

server.prototype.debug = function(req, res, next) {
    console.log(req.url);
};