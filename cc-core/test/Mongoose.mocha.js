// *************************** REGRESSION ***************************
// 1. test if Bones.sync has been set from Bones.plugins.backends.Mongoose.sync
// 2. .


// **************************** DEFAULTS ****************************

require('./fixture');

var _ = require('underscore');
var bonesTest = require('bones-test');
var testUtils = require('bones-boiler');
var server = bonesTest.server();
// TODO: change how to require server.

// Test data.
var data = {
    name: 'First'
};

describe('Mongoose Backend and Boiler Model API', function() {
    describe('Mongoose backend', function() {
        it('should be a backend', function(done) {
            server.plugin.backends.should.be.a('object');
            server.plugin.backends.should.have.property('Mongoose');
            done();
        });

        it('should initialize and store db models in plugin.app', function(done) {
            server.plugin.should.have.property('app').should.be.a('object');
            console.log('plugin: ', server.plugin);
            server.plugin.app.should.have.property('mongooseModels').should.be.a('object');
            done();
        });

        it('should replace Bones.sync with Mongoose.sync', function(done) {
            var Bones = require(global.__BonesPath__ || 'bones');
            try {
                Bones.sync();
            } catch(err) {
                return done(err);
            }
            return done();
        });
    });

    describe('cc-core models', function() {
        _.each(server.plugin.models, function(model){
            bonesTest.testModel(server, model.constructor.title);
            bonesTest.testModelCRUD(server, model.constructor.title, data, {
                name: 'another name'
            });
            bonesTest.testModelCRUDHTTP(server, model.constructor.title, data, {
                name: 'another name'
            });
        });
    });
});