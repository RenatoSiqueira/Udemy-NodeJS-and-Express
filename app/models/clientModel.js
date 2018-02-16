/* Lesson 1 - Chapter 15 */
/*
var mysql = require('mysql')

var conn = function(){
    return mysql.createConnection({
        host: '192.168.99.100',
        user: 'root',
        password: '',
        database: 'curso_node'
    })    
} */
var db = require('../../config/db')
//console.log(conn())

module.exports = function(){
    this.all = function(retorno){
        var conn = db()
        return conn.query('select * from clientes', retorno)
    }

    return this
}