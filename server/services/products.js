const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get(){
  const rows = await db.query(
    `SELECT id, ProductName, PartNumber, ProductLabel, StartingInventory, InventoryReceived, InventoryShipped, InventoryOnHand, MinimumRequired 
    FROM products`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getWithId(id){
  const rows = await db.query(
    `SELECT id, ProductName, PartNumber, ProductLabel, StartingInventory, InventoryReceived, InventoryShipped, InventoryOnHand, MinimumRequired 
    FROM products WHERE id = ${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(product){
    const result = await db.query(
      `INSERT INTO products 
      (ProductName, PartNumber, ProductLabel, StartingInventory, InventoryReceived, InventoryShipped, InventoryOnHand, MinimumRequired) 
      VALUES 
      ('${product.ProductName}', '${product.PartNumber}', '${product.ProductLabel}', ${product.StartingInventory}, ${product.InventoryReceived}, 
        ${product.InventoryShipped}, ${product.InventoryOnHand}, ${product.MinimumRequired})`
    );
  
    let message = 'Error in creating product';
  
    if (result.affectedRows) {
      message = 'Product created successfully';
    }
  
    return {message};
}


  async function update(id, product){
    const result = await db.query(
      `UPDATE products 
      SET ProductName="${product.ProductName}", 
      PartNumber='${product.PartNumber}', 
      ProductLabel="${product.ProductLabel}", 
      StartingInventory=${product.StartingInventory}, 
      InventoryReceived=${product.InventoryReceived}, 
      InventoryShipped=${product.InventoryShipped}, 
      InventoryOnHand=${product.InventoryOnHand}, 
      MinimumRequired=${product.MinimumRequired} 
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}



async function removeMultiply(id){

    let idStr = id.join(",")

    const result = await db.query(
      `DELETE FROM products WHERE id IN (${idStr})`
    );
  
    let message = 'Error in deleting products';
  
    if (result.affectedRows) {
      message = 'Products deleted successfully';
    }
  
    return {message};
  }

module.exports = {
  get,
  create,
  update,
  removeMultiply,
  getWithId
}