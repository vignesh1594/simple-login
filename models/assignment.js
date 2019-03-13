var connection = require('../connection');

function assignment(){
	this.authuser = function(abc, res) {
		var emailid1=abc.emailid1;
		var password=abc.password;
		console.log(emailid1+" "+password);
		connection.acquire(function(err, con) {
			console.log(err);
			console.log("==================================================================================================");
			con.query('SELECT * FROM registereduser WHERE emailid1= "'+emailid1+'" AND password="'+password+'"', function(err, result)
				 {
				con.release();
				if (err)
				{ 	res.json({ success: false, message: 'Technical Error! please try after some time' });}
				else
				{ 	if (result.length < 1) 
					{
						res.json({ success: false, message: 'Authentication failed. User not found or Locked.' });
					}
					else
					{
						if (result['0'].password != password) 
						{  	console.log('Failed'); }
						else
						{
							console.log('Authenticated.');
							var code=200;
							res.status(code).json({
								success: true,
								useremail:result['0'].emailid1,
								userid:result['0'].regid,
								username:result['0'].username,
								message: 'Login Successfully'
							});
						}
					}
				}
			});
       
		});
	};
	
	
	this.registeruser = function(userdata,res){
		console.log(userdata);
		 connection.acquire(function(err,con){
			con.query('insert into registereduser set ?',userdata,function(err,result){
				con.release();
				console.log(err);
				
				
			})
			if(err){
					res.send({status:0,
					message:'Failed'});
				}
				else{
					res.send({status:1,
					message:'Success'});
				}
			
		}) 
	}
	
	this.listregistereduser = function(res){
		connection.acquire(function(err,con){
			con.query('select * from registereduser order by regid desc',function(err,result){
				con.release();
				res.send(result);
			})
			
		})
	}
	
	
}
module.exports = new assignment();