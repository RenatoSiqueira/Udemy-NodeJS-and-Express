/* Lesson 1 - Chapter 13: Models */
var clientModel = require('../models/clientModel')()

/* Lesson 1 - Chapter 12: Routes */
module.exports = function(app){
    app.get('/', function(req, res){
        //console.log(clientModel.all())
        var clientList = clientModel.all()
        res.render('site/home', {clients:clientList})
    })
    
    app.get('/contato', function(req, res){
        res.render('site/contato')
    })
}