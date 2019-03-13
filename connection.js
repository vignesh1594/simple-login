var mysql = require('mysql');

function connection(){
	this.pool = null;
	this.init = function(){
		this.pool =mysql.createPool({
			multipleStatements: true,
			connectionLmit:10,
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'assignment'
			
		})
	}
	this.acquire = function(callback){
		this.pool.getConnection(function(err,connection){
			callback(err,connection);
		})
		
	}
	
}
module.exports = new connection();