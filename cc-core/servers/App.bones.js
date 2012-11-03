var mongoose = require('mongoose');

server = servers.Base.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'index', 'debug', 'initializeBackends');
    this.initializeBackends();
    this.get('/', this.index, this.sendPage);

    //this.get('*', this.debug);
    // globally expose the core application server.
    // TODO: compare app versus this
    console.log('debug app: ', app);
    console.log('debug this (App server): ', this);
    Bones.plugin.app = this;
    // this initialization is technically not concurrency safe right now O.O
    return this;
};

server.prototype.initializeBackends = function(app) {
    var config = Bones.plugin.config;
    var db = this.db;
    db = mongoose.createConnection(config.mongoHost, config.mongoName, config.mongoPort);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // yay! register mongoose models for semi-mixins with server-side backbone models.
        try {
            // XXX: this is fucked up some how. Check what db.model does: registers, or needs to return a model?
            // Convert to factory like method after defining the initial model?? hmmm....
            _.each(models, function(model) {
                db.model(model.title, new mongoose.Schema(model.schema));
            });
            Bones.sync = Bones.plugin.backends.Mongoose.sync;
        } catch(err) {
            console.error('error creating model for schema: ', model.schema);
        }
    });
};

server.prototype.index = function(req, res, next) {
    res.locals.main = templates.Index();
    return next();
};

server.prototype.debug = function(req, res, next) {
    console.log(req.url);
};