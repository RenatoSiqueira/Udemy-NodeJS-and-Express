/* Lesson 1 - Chapter 12 - Part Two */
module.exports = function(){
    /* Lesson 1 - Chapter 11 */
    var express = require('express')

    var app = express()
    app.set('view engine', 'ejs')
    app.set('views', './app/views')
    
    /* Lesson 1 - Chapter 12: Add Routes */
    require('../app/routes/web')(app)

    app.listen(8000, function(){
        console.log('localhost:8000')
    })    
}