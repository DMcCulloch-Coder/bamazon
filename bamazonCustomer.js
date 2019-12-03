const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) console.log(err)
    readDb();
})

function readDb() {
    connection.query('Select * FROM products', (err, res) => {
        if(err) {
            return console.log(err)
        }
        res.forEach(product => {
            console.log(`Item #${product.id}: ${chalk.blue(product.product_name)} costs ` + chalk.green(`$${product.price.toFixed(2)}`))
            
        })
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the item number (just enter the number)?"
            },
            {
                type: "input",
                name: "quantity",
                message: "How many do you want to purchase?"
            }
        ]).then((answers) => {
            makeOrder(answers.id, answers.quantity)
        }).catch((e) => {
            console.log(e)
        })
        
    })
}

function makeOrder(id, quantity) {
    console.log(id) //test
    console.log(quantity) //test
}