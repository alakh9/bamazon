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
            message: 'Which item id would you like to buy? press q to quit',
            validate: function (val) {
                return !isNaN(val) || val.toLowerCase() === "q";
            }
        })

        .then(function (val) {
    var item = parseInt(id);
    var quantity = input.quantity;
    checkToExit(item);

    if (item) {
        promptUserForQuantity(item);
    } else {
        console.log('please choose a valid item');
    }
});
}

function promptUserForQuantity(item){
inquirer
    .prompt([
    {
        name: 'quantity',
        type: 'input',
        message: 'How many would you like to buy? press q to exit',
        validate: function (val){
            return val > 0 || val.toLowerCase() === "q";
        }
    }
])

   


    function placeOrder(product) {
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
            });
        }
                
    
    function checkToExit(choice) {
        if (choice.toLowerCase() === "q") {
            console.log("Goodbye!");
            process.exit(0);
        }
    }
}
