server = servers.Base.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'fill');
    this.app = app;

    // url paths to handle.
    this.get('/inside/:center', this.center, this.sendPage);
    this.get('/create/center', this.fill, this.sendPage);
    this.post('/create/center', this.create);
    return this;
};

server.prototype.fill = function(req, res, next) {
    return next();
};