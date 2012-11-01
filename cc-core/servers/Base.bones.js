server = Bones.Server.extend();

// Render and send views to the client with everything the boilerplate needs.
server.prototype.send = function(req, res, next) {
    // Use requested root template or default to templates.App. No need to
    // allocate view object on the server for the wrapper template.
    var options = res.locals.options || {};
    var template = res.locals.template || templates.App;
    // pull main from res.locals so handlers don't have to initialize options object just for main html
    options.main = res.locals.main || (res.locals.view ?
            ( res.locals.view.outerHtml ? res.locals.view.render().outerHtml() : res.locals.view.render().html() ) :
            'Loading');

    // TODO: nothing for now.
    var initialize = function(models, views, routers, templates) {}
        .toString();

     // options.main takes precedence over view in case no need to render, only client-side attach.
    options = _.defaults(options, {
        version: Date.now(),
        title: 'Centered Culture',
        startup: 'Bones.initialize(' + initialize + ');Bones.start();'
    });
    var debug = template(options);

    console.log('debug: ', debug);
    // Send the page to the client.
    res.send(debug);
};

// Convenient wrapper for sending pages with headers and footers. Teehee.
server.prototype.sendPage = function(req, res, next) {
    // TODO: set logged-in user or whatever.
    res.locals.template = templates.Page;
    return server.prototype.send(req, res, next);
};

// Create and render a form view for a model.
server.prototype.formView = function(req, res, next) {
    var view;
    if (res.locals.model) {
        view = new views.Form({ model: res.locals.model, template: 'submitForm' });
        view.render().$el.attr('action', Bones.utils.getUrl(res.locals.model));
        res.locals.main = view.outerHtml();
        return next();
    } else {
        return res.send('Not sure what happened. Having trouble finding your page. Please speak with the administrator or try again later.', 500);
    }
};