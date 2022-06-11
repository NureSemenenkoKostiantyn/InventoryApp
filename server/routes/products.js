const express = require('express');
const router = express.Router();
const products = require('../services/products');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getProducts());
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;