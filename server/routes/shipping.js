const express = require('express');
const router = express.Router();

const shipping = require('../services/shipping')

router.put('/out', async function(req, res, next) {
    try {
        let response = {}
        req.body.data.forEach(async product => {
            response = await shipping.updateOut(product.id, product.number)
        });
        res.json(response)


    } catch (err) {
      console.error(`Error while updating product`, err.message);
      next(err);
    }
});

router.put('/in', async function(req, res, next) {
    try {
        let response = {}
        req.body.data.forEach(async product => {
            response = await shipping.updateIn(product.id, product.number)
        });
        res.json(response)


    } catch (err) {
      console.error(`Error while updating product`, err.message);
      next(err);
    }
});

module.exports = router;