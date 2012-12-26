server = servers.Base.extend();

server.prototype.initialize = function(app) {
    // Set up our own application namespace.
    Bones.app = this;

    this.get('/', this.index, this.sendPage);
    return this;
};

server.prototype.index = function(req, res, next) {
    models.Points.getLatest(function(err, points) {
        if (err) return next(err);
        console.log('app.points: ', points);
        res.locals.main = Bones.utils.templateAll('Index', {
            points: points,
            model: models.Point
        });
        return next();
    });
};

server.prototype.debug = function(req, res, next) {
    console.log('request');
    console.log('url: ', req.url);
    console.log('method: ', req.method);
};