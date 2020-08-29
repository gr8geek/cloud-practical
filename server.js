var http = require('http')
var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello beautiful world</h1>')
}).listen(8080)
//console.log("listening Bro..",")
