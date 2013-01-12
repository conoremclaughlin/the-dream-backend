var Bones = require('bones');
var fs = require('fs');
var path = require('path');

require('bones-boiler');
require('bones-page');
require('./routers/Base.page.js');

// Load the CC application.
Bones.load(__dirname);