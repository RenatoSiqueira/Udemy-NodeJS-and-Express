/* Lesson 1 - Chapter 13: Models */
var clientModel = require('../models/clientModel')()

/* Lesson 1 - Chapter 12: Routes */
module.exports = function(app){
    app.get('/', function(req, res){
        //console.log(clientModel.all())
        clientModel.all(function(err, results){
            res.render('site/home', {clients:results})
        })        
    })
    
    app.get('/contato', function(req, res){
        res.render('site/contato')
    })
}