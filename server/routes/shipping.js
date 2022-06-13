const express = require('express');
const router = express.Router();

const shipping = require('../services/shipping')

router.put('/out', async function(req, res, next) {
    try {
        await shipping.updateOut(req.body.product, req.body.shippedNumber)

    } catch (err) {
      console.error(`Error while updating product`, err.message);
      next(err);
    }
});

router.put('/in', async function(req, res, next) {
    try {
        await shipping.updateIn(req.body.product, req.body.shippedNumber)

    } catch (err) {
      console.error(`Error while updating product`, err.message);
      next(err);
    }
});

module.exports = router;