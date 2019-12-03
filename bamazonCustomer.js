const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) console.log(err)
    console.log(`Connected as id ${connection.threadId}`)
    startApp();
})

function startApp() {
    console.log('start')
    connection.end()
}