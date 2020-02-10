const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root12345',
    database:'movieindoxxi',
    port: '3306'
})

module.exports=db