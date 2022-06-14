CREATE SCHEMA `inventory`;
USE inventory;
CREATE TABLE `products` (
ID INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
ProductName VARCHAR(50) NOT NULL,
PartNumber VARCHAR(50) NOT NULL,
ProductLabel VARCHAR(50) NOT NULL,
StartingInventory INT NOT NULL,
InventoryReceived INT NOT NULL,
InventoryShipped INT NOT NULL,
InventoryOnHand INT NOT NULL,
MinimumRequired INT NOT NULL
);
INSERT INTO products 
	(ProductName, PartNumber, ProductLabel, StartingInventory, InventoryReceived, InventoryShipped, InventoryOnHand, MinimumRequired) 
VALUES ('TestName', 'TestPartNumber', 'TestLabel', 1000, 35, 40, 995, 20); 
