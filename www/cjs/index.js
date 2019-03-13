var myapp = angular.module('Assignmentapp',['ngFileUpload']);

myapp.controller('Assignmentcontroller',function(Upload,$scope,$http,$window){
$scope.usertype=sessionStorage['usertype'];
$scope.emailid1=sessionStorage['emailid1'];

$scope.registeruser = function(){
	console.log($scope.user);
	if($scope.user.mobileno == undefined || $scope.user.emailid1 == undefined )
		{
		alert("Mobile Or Emailid Is Blank");
	}
	else{
	/* $http({
		method:'POST',
		url:'http://localhost:8326/api/registeruser',
		data:$scope.user,
		headers:{'Content-Type':'application/json'}
		
	}).then(function(data){
		if(data.status==200){
		alert("Created Successfully");
		$window.location.reload();
		}
		else {
			alert("Creation Failed");
		$window.location.reload();
		}
	}) */
	Upload.upload({
			method:"POST",
            url: 'http://localhost:8326/registeruser',
			arrayKey: '',//webAPI exposed to upload the file
            data:$scope.user
			//pass file as data, should be user ng-model
        }).then(function (response) { //upload function returns a promise
			console.log(response);
			if(response.status==200){
		alert("Created Successfully");
		$window.location.reload();
		}
		else {
			alert("Creation Failed");
		$window.location.reload();
		}
			//$window.location.reload();
        }); 
	}
	
}

$scope.listregistereduser = function(){
	$http({
		method:'GET',
		url:'http://localhost:8326/api/listregistereduser',
		dataType:'jsonp'
		
	}).then(function(response){
		$scope.listregistereduserdata = response.data;
		console.log($scope.listregistereduserdata);
	})
	
}

$scope.verifyuser = function(x){
	console.log(x);
	for(var i=0;i<=$scope.listregistereduserdata.length;i++){
		if(x==$scope.listregistereduserdata[i].username){
			$scope.duplicateuser = "Already Exist username"
		}
	}
}
$scope.verifyemail = function(x){
	for(var i=0;i<=$scope.listregistereduserdata.length;i++){
		if(x==$scope.listregistereduserdata[i].emailid1){
			$scope.duplicateemail = "Already Exist Emailid"
		}
	}
}

$scope.submitForm = function() {
		
		$http({
			method: 'POST',
			url: 'http://localhost:8326/api/user/auth/',
			data: $scope.user
			
		})
		.then(function(data) {
			//alert(JSON.stringify(data));
			var data=data.data;
			if (!data.success) {
				alert(data.message);
				$scope.errormMessage = data.message;
			}      
			else {
				alert(data.message);
				$window.sessionStorage["emailid1"] = JSON.stringify(data.useremail).replace(/\"/g,"");
				$window.sessionStorage["username"] = JSON.stringify(data.username).replace(/\"/g,"");
				$window.sessionStorage["userid"] = JSON.stringify(data.userid);
				location.href="empmaster.html";
			}
        });
    };

				
});