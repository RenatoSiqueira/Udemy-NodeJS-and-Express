var express = require('express')
var app = express()

app.get('/contato', function(req, res){
    res.send(`
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
})

app.get('/', function(req, res){
    res.send(`
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
})


app.listen(8000, function(){
    console.log('localhost:8000')
})