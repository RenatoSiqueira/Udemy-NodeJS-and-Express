/* First Command */
//console.log('Hello Node!')

/* Second Command */
var http = require('http')

var server = http.createServer(function(req, res){
    var page = req.url
    console.log(page)
    res.end('Ok')
})

console.log('localhost:8000')
server.listen(8000)