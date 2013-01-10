model = models.Points;

Bones.plugin.backends.MonEnumerable.mixinQueries(model);

// example use:
//Bones.plugin.backends.MonEnumerable.mixinPrototypeQueries(model, model.prototype.getConnection);

console.log('Collection Points: ', util.inspect(model));

/*
model.getLatest = function(skip, limit, callback) {
    callback = callback || _.last(arguments);
    if (!callback || !_.isFunction(callback)) return false;
    skip = skip || 0;
    limit = limit || 10;
    // XXX: fix this query. different from find for some reason.
    Bones.plugin.mongooseModels[model.prototype.model.title]
        .find()
        .sort('-created')
        .skip(skip)
        .limit(limit)
        .exec(callback);
    return true;
};*/