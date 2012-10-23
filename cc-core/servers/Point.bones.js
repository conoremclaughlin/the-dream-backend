server = servers.Base.extend();

server.prototype.initialize = function(app) {
    // url paths to handle.
    this.get('/see/:type', this.point, this.sendPage);
    this.get('/create/point', this.pointForm, this.formView, this.sendPage);
    this.post('/create/point', this.create);
    this.get('*', this.debug);
    return this;
};

server.prototype.pointForm = function(req, res, next) {
    console.log('pointForm called.');
    res.locals.model = new models.Point();
    return next();
};

