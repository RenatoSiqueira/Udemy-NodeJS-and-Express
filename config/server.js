/* Lesson 1 - Chapter 11 */
var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = app