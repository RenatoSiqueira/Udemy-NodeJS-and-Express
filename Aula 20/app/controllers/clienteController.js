var clienteModel = require('../models/clienteModel')()

module.exports.index = function(req, res) {
    clienteModel.all(function(erro, resultado){
        res.render('site/home', { clientes: resultado })
    })    
}

module.exports.store = function(req, res) {
    var dados = req.body
    //console.log(dados)
    clienteModel.save(dados, function(erro, resultado){
        if(resultado[0] && !erro)
            res.render('site/detalhe', { cliente: resultado[0] })
        else {
            console.log('Erro ao adicionar o cliente')
            res.redirect('/')
        }
    })   
}

module.exports.show = function(req, res) {
    clienteModel.find(req.params.id, function(erro, resultado){
        if(resultado[0] && !erro)
            res.render('site/detalhe', { cliente: resultado[0] })
        else {
            console.log('Esse cliente não existe')
            res.redirect('/')
        }
    })
}