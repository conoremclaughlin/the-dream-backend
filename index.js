#!/usr/bin/env node

var Bones = require('bones');

require('./cc-core');

Bones.load(__dirname);

if (!module.parent) {
    // TODO: would a pre-flight here be useful? Before initialization?
    Bones.start();
}