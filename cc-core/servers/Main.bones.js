/**
 *
 */

server = Bones.Server.extend();

server.prototype.initialize = function(app) {
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