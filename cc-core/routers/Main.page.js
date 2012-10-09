router = Bones.Page.extend({
    // Helper to assemble the page title.
    pageTitle: function(view) {
        var title = 'devo.ps';
        return (view.pageTitle ? view.pageTitle + ' | ' + title : title);
    },

    // The send method is...
    send: function(view, options) {
        options || (options = {});
        this.appView = this.appView || new views.App();
        options.appView = this.appView;
        var v = new view(options);

        // Populate.
        $('#page').empty().append(v.el);

        // Render.
        v.render().attach();

        // Set the page title.
        document.title = this.pageTitle(v);
    },

    // Generic error handling for our Router.
    // TODO
    error: function(error) {}
});
