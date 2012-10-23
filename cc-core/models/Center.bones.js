model = Backbone.Model.extend({
    schema: {
        name:       { type: 'Text', validators: ['required'] },
        parent:     { type: 'Text', validators: ['required'] },
        created:    { type: 'Date', validators: ['required'] }
    }
});