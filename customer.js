var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,


    user: 'root',


    password: 'Chrissy8!',
    database: 'bamazon_DB'
});

connection.connect(function (err) {
    if (err) throw err;

    inventory();
});

function inventory() {

    querySelect = 'SELECT * FROM products';

    connection.query(querySelect, function (err, data) {
        if (err) throw err;

        console.table(data);

        User();
    })
}


function User() {
    inquirer
        .prompt({
            name: 'id',
            type: 'input',
            message: 'Which item id would you like to buy?',
        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to buy?',
        }
        ).then(function (input) {

            var item = input.id;
            var quantity = input.quantity;

            var querySelect = 'SELECT * FROM products WHERE ?';

            connection.query(querySelect, { id: item }, function (err, data) {
                if (err) throw err;


                if (data.length === 0) {
                    console.log('Select a valid Item ID.');
                    inventory();

                } else {
                    var productData = data[0];

                    if (quantity <= productData.stock_quantity) {
                        console.log('Placing order!');


                        var update = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE id = ' + item;

                        connection.query(update, function (err, data) {
                            if (err) throw err;

                            console.log('Order placed! Total is $' + productData.price * quantity);

                            connection.end();
                        })
                     } else {
                        console.log('Order not placed, item quantity is low!');

                        inventory();
                    }
                }
            })
        })
}


// function run() {

//     inventory();
// }


// run();