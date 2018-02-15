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
    this.all = function(){
        var conn = db()
        conn.query('select * from clientes', function(err, results){
            console.log(results, err)
        })
        return [
            {name:'Paulo', email:'paulo@email.com'}
        ]
    }

    return this
}