var Bones = require('bones');

require('./servers/Main.bones.js');

/**
 * Add the ability to load backends.
 */
var plugin = Bones.plugin;

var pluginLoad = plugin.load;

plugin.load = function(dir) {
    var self = pluginLoad.call(this, dir);
    self.require(dir, 'cc');
    return self;
};
console.log('we get here.');
// Load me.
Bones.load(__dirname);
