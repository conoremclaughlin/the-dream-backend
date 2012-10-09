server = Bones.servers.Main.extend();

server.prototype.initialize = function(app) {
	_.bindAll('index', 'center');

	// url paths to handle.
	this.get('/', this.index);
	this.get('/play', this.love);
	this.get('/centers/:center', this.center);
};

server.prototype.center = function(req, res, next) {


};