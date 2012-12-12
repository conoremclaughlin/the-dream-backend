model = Backbone.Model.extend({

    /**
     * Map MongoDB record _id to backbone model.id
     */
    idAttribute: '_id',

    /**
     * Override url root to use the title for urls.
     */
    urlRoot: function() {
        return url = '/api/' + this.constructor.title.toLowerCase();
    },

    renderAll: function() {
        if (!this.render) return false;
        return this.render().renderSubviews();
    },

    renderSubviews: function() {
        Bones.utils.renderSubviews(this.el);
        return this;
    }
});