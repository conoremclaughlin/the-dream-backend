#!/usr/bin/env node

var Bones = require('bones');
var async = require('async');
require('./cc-core');

Bones.load(__dirname);

if (!module.parent) {
    // TODO: would a pre-flight here be useful? Before initialization?
    Bones.start();
}