var assignment = require('./models/assignment');

module.exports = {
	
	configure : function(app){
		app.post('/api/user/auth/', function (req, res) {assignment.authuser(req.body, res);});	
		
		app.post('/api/registeruser/',function(req,res){assignment.registeruser(req.body,res);});
		
		app.get('/api/listregistereduser/',function(req,res){assignment.listregistereduser(res);});
		
	}
	
};