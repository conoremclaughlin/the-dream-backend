model = models.Points;

/**
 * Requires a db connection to access mongooseModels.
 * @param lt - must be less than
 * @param gt -
 * @param callback - what next?
 * @api public
 */
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
};