const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getProducts(){
  const rows = await db.query(
    `SELECT id, ProductName, PartNumber, ProductLabel, StartingInventory, InventoryReceived, InventoryShipped, InventoryOnHand, MinimumRequired 
    FROM products`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getProducts
}