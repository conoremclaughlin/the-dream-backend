server = servers.Base.extend();

server.prototype.initialize = function(app) {
    this.get('/see/:type', this.point, this.sendPage);
    this.get('/point/new', this.pointForm, this.formView, this.sendPage);
    this.get('*', this.debug);
    return this;
};

server.prototype.pointForm = function(req, res, next) {
    res.locals.model = new models.Point();
    return next();
};

