router = Bones.Page.extend({

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
