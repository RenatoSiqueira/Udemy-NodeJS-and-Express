var mysql = require('mysql')

var con = function(){
    return mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'senha',
        database: 'curso_node'
    })
}

module.exports = con