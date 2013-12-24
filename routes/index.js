var path = require('path');

var routes = [{
	route : 'helloworld',
	controller : 'helloworld'
}];

module.exports = function(app){
	for(var i in routes){
		var controller = require(path.join(app.get('root'),'controllers',routes[i].controller));
		require(path.join(app.get('root'),'routes',routes[i].route))(app,controller);
	}
}