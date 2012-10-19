server = Bones.Server.extend();

server.prototype.send = function(req, res, next) {
    // Use requested root template or default to templates.App. No need to
    // allocate view object on the server for the wrapper template.
    var options = res.locals.options || {};
    var template = res.locals.template || templates.App;
    // pull main from res.locals so handlers don't have to initialize options object just for main html
    options.main = res.locals.main || (res.locals.view ? res.locals.view.render().html() : 'Loading');

    // TODO: nothing for now.
    var initialize = function(models, views, routers, templates) {}
        .toString();
    console.log('options: ', options);

     // options.main takes precedence over view in case no need to render, only client-side attach.
    options = _.defaults(options, {
        version: Date.now(),
        title: 'Centered Culture',
        startup: 'Bones.initialize(' + initialize + ');Bones.start();'
    });

    // Send the page to the client.
    res.send(template(options));
};

//Convenient wrapper for sending pages with headers and footers. Teehee.
server.prototype.sendPage = function(req, res, next) {
    // TODO: set logged-in user or whatever.
    res.locals.template = templates.Page;
    return this.send(req, res, next);
};