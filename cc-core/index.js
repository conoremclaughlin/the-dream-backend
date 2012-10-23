var Bones = require('bones');
var fs = require('fs');
var path = require('path');

/**
 * Add pages to the plugin.
 */
Bones.plugin.pages = {};

// Exposing pages to Bones so they can be rendered with
// a wrapping dynamic view for things like logged-in users (App._ for example)
require.extensions['.html'] = function(module, filename) {
    var content = fs.readFileSync(filename, 'utf8');

    // If an err is thrown need to fix the output from printing 'template' to 'pages.'
    try {
        module.exports.content = content;
        Bones.plugin.add(module.exports, filename);
    } catch(err) {
        var lines = err.message.split('\n');
        lines.splice(1, 0, '    in page ' + filename);
        err.message = lines.join('\n');
        throw err;
    }
    // Expose page fetches from the static asset server.
    module.exports.register = function(app) {
        if (app.assets && !(/\.server\._$/.test(filename))) {
            app.assets.pages.push({
                filename: filename,
                content: 'page = ' + module.exports.source + ';'
            });
        }
    };
};

//TODO TODO TODO: ADD an app object with things like database connections :|

// OVERRIDE this to load and use your own statically compiled directory structure.
// Note: Bones.plugin.add uses the parent directory of the file to describe its 'kind'
// for storage in the Plugin, hence templates/compiled/templates.
// TODO: May create new addTemplate to allow more flexible directories.....
Bones.plugin.loadCompiled = function(dir) {
    this.require(dir, 'templates/compiled/templates'); // Load statically-compiled dynamic templates.
    this.require(dir, 'templates/compiled/pages'); // Load static pages for wrapper rendering.
};

Bones.plugin.load = _.wrap(Bones.plugin.load, function(parent, dir) {
    var success = parent.call(this, dir);
    this.loadCompiled(dir);
    return success;
});

require('./servers/Base.bones.js');

// Load me. Yo I'm the core dawg. Everyone needs me.
Bones.load(__dirname);

require('bones-boiler');

