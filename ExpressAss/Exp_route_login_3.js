var exp = require('express');

var app = exp();

app.get('/login1',function(req,res){
       res.sendFile(__dirname+"/login1.html");
});

app.get('/logincheck',function(req,res){
	if(req.query.uid=="object" && req.query.pwd=="knowit")
		res.send("Login successful");
	else
		res.send("Failed Login");	
});

app.all('*',function(req,res){
	res.send("Invalid URL !!");
});

app.listen(9000,function(){
	console.log("exp server started at 9000");	
});


