server = new Bones.Server.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'index', 'center');

    // url paths to handle.
    this.get('/', this.index);
    this.get('/play', this.love);
    this.get('/inside/:center', this.center);
    return this;
};

server.prototype.send = function(req, res, next) {
    // TODO: nothing for now.
    var initialize = function(models, views, routers, templates) {}
        .toString();

    // Send the page to the client.
    res.send(templates.App({
        version: Date.now(),
        title: 'Centered Culture',
        main: 'Loading...',
        startup: 'Bones.initialize(' + initialize + ');Bones.start();'
    }));
};

server.prototype.index = function(req, res, next) {
    console.log('Pages: ', Bones.plugin.pages, '\n_____________________________');
    console.log('Templates: ', Bones.plugin.templates, '\n_____________________________');
};

server.prototype.play = function(req, res, next) {

};

server.prototype.center = function(req, res, next) {


};