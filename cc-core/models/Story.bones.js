model = Backbone.Model.extend({
    schema: {
        name:       { type: 'Text', validators: ['required'] },
        point:      { type: 'Hidden' },
        user:       { type: 'Text', validators: ['required'] },
        email:      { type: 'Email', validators: ['required'] },
    }
});