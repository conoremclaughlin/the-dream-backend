/**
 * Topmost view.
 */
view = Backbone.View.extend({
    _ensureElement: function() {
        this.setElement('body');
    }
});