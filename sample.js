var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(req,res){
	var q = url.parse(req.url);
	var filename = "."+ q.path+".html";
	if(filename == "./.html"){
		filename = "./index.html";
	}

	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return res.end("<h1>ERROR 404 : Link Not Found");
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
	})
	
}).listen(8080);
console.log("Waiting for connections.....")