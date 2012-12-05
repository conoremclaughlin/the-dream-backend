var mongoose = require('mongoose');

server = servers.Base.extend();

server.prototype.initialize = function(app) {
    // Set up a special namespace for application-specific features.
    Bones.app = this;

    // TODO: move to bones-boiler. Change the naming here, too.  It's confusing.
    this.get('/', this.index, this.sendPage);
    return this;
};

server.prototype.index = function(req, res, next) {
    res.locals.main = templates.Index();
    return next();
};

server.prototype.debug = function(req, res, next) {
    console.log('request');
    console.log('url: ', req.url);
    console.log('method: ', req.method);
};