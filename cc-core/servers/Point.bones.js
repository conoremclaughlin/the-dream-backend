server = servers.Base.extend();

server.prototype.initialize = function(app) {
    this.get('/:point', this.point, this.sendPage);
    this.get('/new', this.pointForm, this.formView, this.sendPage);
    return this;
};

server.prototype.pointForm = function(req, res, next) {
    res.locals.model = new models.Point();
    return next();
};

