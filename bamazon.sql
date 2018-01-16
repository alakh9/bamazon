DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(40) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Cat Litter', 'Pet', 8.99, 50),
		('Captain Crunch', 'Grocery', 3.25, 300),
		('Nyquil', 'Health', 7.99, 200),
		('Coffee', 'Grocery', 4.25, 500),
		('Flip Flops', 'Clothing', 5.50, 60),
		('Nail Polish', 'Beauty', 2.99, 1000),
		('Banana', 'Produce', 1.60, 500),
		('Chicken Thighs', 'Meat', 12.50, 220),
		('Beats Headphones', 'Electronics', 99.99, 200),
		('Hand Lotion', 'Beauty', 2.99, 600),
		('Axe', 'Beauty', 4.50, 400),
		('Muscle Milk', 'Health', 2.75, 480),
		('Bath Rob', 'Clothing', 20.99, 200),
		('Roses', 'Floral', 4.99, 80),
		('Doritos', 'Grocery', 4.25, 1000),
		('Corona', 'Alcohol', 12.49, 90),
		('Zebra Cakes', 'Grocery', 4.50, 300),
		('Bagel', 'Bakery', 4.95, 200),
		('Egg Nog', 'Dairy', 3.25, 100),
		('Frozen Pizza', 'Frozen', 4.50, 500);