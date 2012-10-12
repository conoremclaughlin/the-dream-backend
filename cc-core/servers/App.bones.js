server = servers.Main.extend();

server.prototype.initialize = function(app) {
	_.bindAll(this, 'index', 'center');

	// url paths to handle.
	this.get('/', this.index);
	this.get('/play', this.love);
	this.get('/inside/:center', this.center);
};

server.prototype.index = function(req, res, next) {
    console.log('Pages: ', Bones.plugin.pages, '\n_____________________________');
    console.log('Templates: ', Bones.plugin.templates, '\n_____________________________');
};

server.prototype.play = function(req, res, next) {

};

server.prototype.center = function(req, res, next) {


};