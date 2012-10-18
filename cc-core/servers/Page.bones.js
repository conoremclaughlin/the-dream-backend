server = servers.App.extend();

server.prototype.initialize = function(app) {
    _.bindAll(this, 'pageHandler');
    return this;
};

// STATIC - Return a handler to send the rendered page.
server.prototype.pageHandler = function(page) {
    // TODO: add an app object to store the root level view.
    // TODO: app object also needs to store the Main router.
    // Render the page once.
    return function(req, res, next) {
        // TODO: set logged-in user or whatever.
        req.locals.template = templates.Page;
        req.locals.main = pages.page.content;
        next();
    };
};
