router = Bones.Page.extend({

    initialize: function(options) {
        // set Marionette instance as the primary app namespace for now.
        // TODO: may change to page if needed later
        this.app = new Backbone.Marionette.Application();
        this.app.page = this;
        Bones.app = this.app;
        return this;
    },

    send: function(view, options) {
        options || (options = {});
        this.appView = this.appView || new views.App();
        options.appView = this.appView;
        view = new view(options);

        $('#page').empty().append(view.el);
        view.render().attach();

        document.title = this.pageTitle(view);
    },

    error: function(error) {}

});
