const express = require('express');
const controllerProducts = require('../controllers/controllerProducts');

const router = express.Router();

router
.route('/products')
.post(controllerProducts.createProducts);

module.exports = router;