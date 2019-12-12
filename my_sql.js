var mysql = require('mysql')

//create connection
var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "sample_db"
});

//connect to mysql
con.connect(function(err){
	if(err){
		throw err;
	}
	console.log("database connected...");

	//create database
	con.query("CREATE DATABASE sample_db",function(err,result){
		if(err)
		{
		 throw err;
		}
		console.log("Database created");
	});
	var sql = "CREATE TABLE sample (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50))";
	con.query(sql,function(err,result){
		if(err)
		{
		 throw err;
		}
		console.log("Table created");

	});
});