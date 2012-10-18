server = Bones.Server.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'index', 'center', 'debug');
    this.app = app;

    // url paths to handle.
    this.get('/', this.index);
    this.get('/play', this.love);
    this.get('/inside/:center', this.center);
    this.get('*', this.debug);
    return this;
};

server.prototype.send = function(req, res, next) {
    // Use requested root template or default to templates.App. No need to
    // allocate view object on the server for the wrapper template.
    console.log('sending template.');
    var template = res.locals.template || templates.App;
    var main = res.locals.view || {};
    // TODO: nothing for now.
    var initialize = function(models, views, routers, templates) {}
        .toString();
    // options.main takes precedence over a passed view's rendered html.
    var options = _.defaults(res.locals.options, {
        version: Date.now(),
        title: 'Centered Culture',
        main: main.render().html(),
        startup: 'Bones.initialize(' + initialize + ');Bones.start();'
    });

    // Send the page to the client.
    res.send(template(options));
};

server.prototype.index = function(req, res, next) {
    console.log('Pages: ', Bones.plugin.pages, '\n_____________________________');
    console.log('Templates: ', Bones.plugin.templates, '\n_____________________________');
};

server.prototype.play = function(req, res, next) {

};

server.prototype.center = function(req, res, next) {


};

server.prototype.debug = function(req, res, next) {
    console.log(this.app.routes);
};