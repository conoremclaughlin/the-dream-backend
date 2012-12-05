router = routers.Base.extend({

    routes: {
        '/': 'home',
    },

    home: function() {

        // TODO: implement backbone marionette here
        console.log('rendering home.');
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
