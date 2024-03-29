// *************************** REGRESSION ***************************
// 1. test if Bones.sync has been set from Bones.plugins.backends.Mongoose.sync
// 2.


// ***************************** TESTS ******************************

process.env.NODE_ENV = 'test';

require('./fixture');

var _ = require('underscore');
var bonesTest = require('bones-test');

// TODO: change how to require server.
var server = bonesTest.server();
// Write to a test database.
// TODO: write an uninstall method for the test database.
server.plugin.config.mongoName = 'cc-test';

// Test data.
var data = {
    name: 'First'
};

describe('Model API:', function() {
    bonesTest.utils.initStart(server);
    describe('mongoose', function() {

        it('should be a backend', function(done) {
            server.plugin.backends.should.be.a('object');
            server.plugin.backends.should.have.property('Mongoose');
            done();
        });

        it('should initialize and store db models in plugin.app', function(done) {
            server.plugin.should.have.property('app').should.be.a('object');
            server.plugin.app.should.have.property('mongooseModels').should.be.a('object');
            done();
        });

        it('should replace Bones.sync with Mongoose.sync', function(done) {
            var Bones = require(global.__BonesPath__ || 'bones');
            try {
                Bones.sync({}, {}, function(err) {
                    // no model in req argument, so should call next with error.
                    if (err) done();
                });
            } catch(err) {
                return done(err);
            }
        });
    });

    describe('base models', function() {
        var model = new server.plugin.models.Base();
        it('should have a url /api/<title> with no id', function(done) {
            model.url().should.be.equal('/api/base');
            done();
        });

        it('should have a url /api/<title>/:id with a set id', function(done) {
            model.id = 'cool';
            model.url().should.be.equal('/api/base/cool');
            done();
        });
    });

    describe('base collections', function() {
        it('with "created" should be able to getLatest', function() {
            done('not implemented');
        });

        it('should be able to paginate to the second page from the result', function() {
            done('not implemented');
        });
    });

    describe('cc-core models', function() {
        bonesTest.testModel(server, 'Point');
        bonesTest.testModelCRUDHTTP(server, 'Point', data, {
            name: 'another name'
        });
        /*
        _.each(server.plugin.models, function(model){
            bonesTest.testModel(server, model.constructor.title);
            bonesTest.testModelCRUD(server, model.constructor.title, data, {
                name: 'another name'
            });
            bonesTest.testModelCRUDHTTP(server, model.constructor.title, data, {
                name: 'another name'
            });
        });
        */
    });
});