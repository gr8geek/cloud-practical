var http = require('http')
var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hie</h1>')
}).listen(8080,"127.0.0.6")
//console.log("listening Bro..",")
