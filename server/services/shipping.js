const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function updateIn(product, number){
    const result = await db.query(
        `UPDATE products 
        SET 
        InventoryShipped=${product.InventoryShipped - number}, 
        InventoryOnHand=${product.InventoryOnHand + number}
        WHERE id=${product.id}`  
    );
  
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}

async function updateOut(product, number){
    const result = await db.query(
      `UPDATE products 
      SET 
      InventoryShipped=${product.InventoryShipped + number}, 
      InventoryOnHand=${product.InventoryOnHand - number}
      WHERE id=${product.id}` 
    );
  
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}

module.exports = {
    updateIn,
    updateOut

  }