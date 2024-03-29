server = servers.Base.extend();

server.prototype.initialize = function(app) {
    this.get('/:center', this.center, this.sendPage);
    this.post('/new', this.create);
    return this;
};

server.prototype.centerForm = function(req, res, next) {
    res.locals.model = new models.Point();
    return next();
};
