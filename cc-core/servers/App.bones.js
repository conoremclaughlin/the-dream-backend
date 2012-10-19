server = servers.Base.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'index', 'debug');
    this.app = app;

    // url paths to handle.
    this.get('/', this.index, this.sendPage);
    this.get('*', this.debug);
    return this;
};

server.prototype.index = function(req, res, next) {
    res.locals.main = templates.Index({});
    return next();
};

server.prototype.debug = function(req, res, next) {
    console.log('.');
};