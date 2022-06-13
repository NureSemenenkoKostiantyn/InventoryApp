const db = require('./db');
const { getWithId } = require('./products');

async function updateIn(id, number){
    let product = await getWithId(id)
    console.log(product)
    console.log("number", number)

    const result = await db.query(
        `UPDATE products 
        SET 
        InventoryReceived=${Number(product.data[0].InventoryReceived) + Number(number)}, 
        InventoryOnHand=${product.data[0].InventoryOnHand + Number(number)}
        WHERE id=${id}`  
    );
 

  
  
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'Product updated successfully';
    }
  
    return {message};
}

async function updateOut(id, number){
    let product = await getWithId(id)
    const result = await db.query(
      `UPDATE products 
      SET 
      InventoryShipped=${product.data[0].InventoryShipped + Number(number)}, 
      InventoryOnHand=${product.data[0].InventoryOnHand - Number(number)}
      WHERE id=${id}` 
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