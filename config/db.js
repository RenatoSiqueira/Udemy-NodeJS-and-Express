/* Lesson 1 - Chapter 16 */
var mysql = require('mysql')

var conn = function(){
    return mysql.createConnection({
        host: '192.168.99.100',
        user: 'root',
        port: '32771',
        password: 'devpleno',
        database: 'curso_node'
    })    
}

module.exports = conn