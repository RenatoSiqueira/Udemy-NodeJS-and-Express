/* First Command */
//console.log('Hello Node!')

//#########################

/* Second Command */
/*var http = require('http')

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
server.listen(8000) */

//#########################

/* Lesson 1 - Chapter 8 */
//var express = require('express')

/* Lesson 1 - Chapter 10 */
//var myModule = require('./external_module')
//console.log(myModule())

//var app = express()

/* Lesson 1 - Chapter 9 */
//app.set('view engine', 'ejs')

//#########################

/* Lesson 1 - Chapter 11 */
var app = require('./config/server')

/*
app.get('/', function(req, res){
    res.render('site/home')
})

app.get('/contato', function(req, res){
    res.render('site/contato')
})
*/

app.listen(8000, function(){
    console.log('localhost:8000')
})