var db = require('../../config/db')

module.exports = function(){
    var con = db()
    con.query('select * from clientes', function(erro, resultado){
        console.log(erro, resultado)
    })
    this.all = function(){
        return [
            { nome: 'Paulo', email: 'paulo@mail.com' }
        ]
    }

    return this
}
