/* var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

//require('../app/routes/web')(app) OU
var rotas = require('../app/routes/web')
rotas(app)

module.exports = app

OU */

module.exports = function(){
    var express = require('express')

    var app = express()
    app.set('view engine', 'ejs')
    app.set('views', './app/views')
    
    //require('../app/routes/web')(app) OU
    var rotas = require('../app/routes/web')
    rotas(app)

    // Veio do app.js
    app.listen('8000', function(){
        console.log('localhost:8000')
    })
}
