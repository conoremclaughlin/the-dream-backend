router = routers.Base.extend({
    routes: {
        '/':         'home',
        '/hello':    'home',
    },

    home: function(ctx) {

        // TODO: implement backbone marionette here
        // TODO: don't use the router to remember but just to drop in client-side views?
        console.log('rendering home.');
        new views.Index();
    }

    /*
     *
    applications: function(ctx) {
        var self = this;
        var id = ctx.params.id;
        new models.Applications().fetch({
            success: function(collection, res) {
                self.send(views.Applications, {
                    collection: collection,
                    model: (id && collection.get(id))
                });
            },
            // TODO
            error: function(collection, res) {}
        });
    },
    */
});
