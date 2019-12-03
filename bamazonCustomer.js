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
    console.log(`Connected as id ${connection.threadId}`) //test
    readDb();
})

function readDb() {
    console.log('start') //test
    connection.query('Select * FROM products', (err, res) => {
        if(err) {
            return console.log(err)
        }
        res.forEach(product => {
            console.log(product.product_name)
            console.log(product.price.toFixed(2))
            
        })
        
    })
}