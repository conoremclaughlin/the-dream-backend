#!/usr/bin/env node

var Bones = require('bones');
var _ = require('underscore');

require('./cc-core');

Bones.load(__dirname);

if (!module.parent) {
    Bones.start();
}