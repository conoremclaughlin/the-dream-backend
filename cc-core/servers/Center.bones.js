server = servers.Base.extend();

server.prototype.initialize = function(app) {
    // url paths to handle.
    this.get('/inside/:center', this.center, this.sendPage);
    this.get('/create/center', this.fill, this.sendPage);
    this.post('/create/center', this.create);
    return this;
};