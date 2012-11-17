server = servers.Base.extend();

server.prototype.initialize = function(app) {
    this.get('/inside/:center', this.center, this.sendPage);
    this.get('/create/center', this.fill, this.sendPage);
    this.post('/center/new', this.create);
    return this;
};