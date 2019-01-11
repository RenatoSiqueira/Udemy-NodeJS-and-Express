//console.log('Hello Node!')

var http = require('http')

var server = http.createServer(function(req, res){
    var page = req.url
    console.log(page)
    if(page == '/contato'){
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Introdução ao NodeJS</title>
                </head>
                <body>
                    <h1>Página de Contato</h1>
                </body>
            </html>
        `)
    } else {
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Introdução ao NodeJS</title>
                </head>
                <body>
                    <h1>Página de Home</h1>
                </body>
            </html>
        `)
    }
})

console.log('localhost:8000')
server.listen(8000)