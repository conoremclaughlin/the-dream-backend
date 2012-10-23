model = models.Story;

model.prototype.dbSchema = model.dbSchema = {
    name: 'String',
    point: 'Oid',
    created: 'Date',
    user: 'Oid',
    body: 'String',
    up: 'Number',
    down: 'Number',
    okay: 'Number'
};