model = models.Point;

model.prototype.dbSchema = model.dbSchema = {
    name:       'String',
    center:     'String',
    country:    'String',
    created:    'Date',
    location:   'String',
    address:    'String',
    vendors:    { type: ['Oid'], method: ['put'] }
};