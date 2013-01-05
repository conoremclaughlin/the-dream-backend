router = Bones.Page.extend({

    initialize: function(options) {
        // set Marionette instance as the primary app namespace for now.
        console.log('page router initialized client-side.');
        this.app = new Backbone.Marionette.Application();
        this.app.page = this;
        Bones.app = this.app;

        // Render and attach any subviews as needed.
        console.log('bones.utils: ', Bones.utils);
        Bones.utils.renderSubviews('body');
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
