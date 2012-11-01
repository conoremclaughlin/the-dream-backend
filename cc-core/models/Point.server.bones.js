model = models.Point;

model.prototype.dbSchema = model.dbSchema = {
    name: 'String',
    center: 'Oid',
    created: 'Date',
    geo: { lat: 'Number', lon: 'Number' },
    address: 'String',
    vendors: { type: ['Oid'], method: ['post'] }
};