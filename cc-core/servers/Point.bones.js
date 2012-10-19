server = servers.Base.extend();

server.prototype.initialize = function(app) {
    // url paths to handle.
    this.get('/see/:type', this.point, this.sendPage);
    this.get('/create/point', this.fill, this.sendPage);
    this.post('/create/point', this.create);
    this.get('*', this.debug);
    return this;
};

server.prototype.point = function(req, res, next) {

};

