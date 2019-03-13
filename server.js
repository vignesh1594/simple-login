var express = require('express');
var bodyparser = require('body-parser');
var multer = require('multer');
var connection = require('./connection');
var path = require('path');
var routes = require('./routes');
var storage	=	multer.diskStorage({
 destination: function (req, file, callback) {
    callback(null, './www/uploads');
 },
 filename: function (req, file, callback) {
   callback(null, 'dt-'+Date.now()+'-'+file.originalname);
  }
});
var upload = multer({ storage : storage});//.single('file');

var app = express();
app.use(bodyparser.urlencoded({limit: "50mb", extended: true,  parameterLimit:50000}));
app.use(bodyparser.json({limit: "50mb"}));
var upload = multer({ storage : storage });

app.post('/registeruser',upload.any('files'), function (req,res,next) {
	console.log(req.files);
	console.log(req.body);
	
		connection.acquire(function(err, con) {
		 var sql = 'insert into registereduser(username,password,emailid1,mobileno,gender,imageprofile) values ("'+req.body.username+'","'+req.body.password+'","'+req.body.emailid1+'",'+req.body.mobileno+',"'+req.body.gender+'","'+req.files[0].filename+'") '; 
	
		console.log(sql)
		con.query(sql, function(err, result) {
			console.log(err);
			console.log(result);
			con.release();
			if (err) {
				
			  console.log('File Upload failed');
			} else {
				console.log('File Upload successfully');
			}
		})
	}); 

	res.end("File is uploaded"); 
});







app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
	next();
});

app.use(express.static(path.join(__dirname,'./www')));

app.get('/',function(req,res){
	res.send("API IS RUNNING");	
});

connection.init();
routes.configure(app);

var server = app.listen(8326,function(){
	console.log("Server Listening On Port:"+server.address().port);
});