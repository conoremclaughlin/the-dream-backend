var Bones = require('bones');
var fs = require('fs');
var path = require('path');

require('./servers/Main.bones.js');

/**
 * Add the ability to load backends.
 */
Bones.plugin.pages = {};

// Exposing pages to Bones so they can be rendered with
// a wrapping dynamic view for things like logged-in users (App._ for example)
require.extensions['.html'] = _.wrap(require.extensions['._'], function(parent, module, filename) {
    // If an err is thrown need to fix the output from printing 'template' to 'pages.'
    try {
        parent.call(this, module, filename);
    } catch(err) {
        var lines = err.message.split('\n');
        lines[1] = '    in page ' + filename;
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
});

// Who uses .htm, seriously!? It's ugly! But just in case....
require.extensions['.htm'] = require.extensions['.html'];

// OVERRIDE this to load and use your own statically compiled directory structure.
// Note: Bones.plugin.add uses the parent directory of the file to describe its 'kind'
// for storage in the Plugin, hence templates/compiled/templates.
// TODO: May create new addTemplate to allow more flexible directories.....
Bones.plugin.loadCompiled = function(dir) {
    this.require(dir, 'templates/compiled/templates'); // Load statically-compiled dynamic templates.
    this.require(dir, 'templates/compiled/pages'); // Load static pages for wrapper rendering.
};

Bones.plugin.load = _.wrap(Bones.plugin.load, function(parent, dir) {
    parent.call(this, dir);
    this.loadCompiled(dir);
    return this;
});

// Load me.
Bones.load(__dirname);
