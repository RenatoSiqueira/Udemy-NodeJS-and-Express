/* Lesson 1 - Chapter 11 */
var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

/* Lesson 1 - Chapter 12: Add Routes */
require('../app/routes/web')(app)
// Or
//var routes = require('../app/routes/web')
//routes(app)

module.exports = app