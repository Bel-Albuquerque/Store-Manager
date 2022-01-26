const express = require('express');
const controllerProducts = require('../controllers/controllerProducts');

const router = express.Router();

router
.route('/products')
.post(controllerProducts.createProducts)
.get(controllerProducts.getColumn);

module.exports = router;