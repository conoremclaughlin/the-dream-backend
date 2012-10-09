var Bones = require('bones');

/**
 * Add the ability to load backends.
 */
var plugin = Bones.plugin;

var pluginLoad = plugin.load;

plugin.maki = {};

plugin.load = function(dir) {
    var self = pluginLoad.call(this, dir);
    self.require(dir, 'cc');
    return self;
};

// Load me.
Bones.load(__dirname);
