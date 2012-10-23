model = models.Point;

model.prototype.dbSchema = model.dbSchema = {
    name: 'String',
    center: 'Oid',
    created: 'Date',
    location: {
        geo: { lat: 'Number', lon: 'Number' },
        address: 'String'
    },
    vendors: ['Oid']
};