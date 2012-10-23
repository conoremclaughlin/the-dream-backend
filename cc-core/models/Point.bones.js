model = Backbone.Model.extend({
    schema: {
        name:       { type: 'Text', validators: ['required'] },
        center:     { type: 'Text', validators: ['required'] },
        country:    { type: 'Select', options: ['USA', 'China'], validators: ['required'] },
        created:    { type: 'Date', validators: ['required'] },
        location:   { type: 'Object', subSchema: {
            address: 'Text',
        }}
    }
});