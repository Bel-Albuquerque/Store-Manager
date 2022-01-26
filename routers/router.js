const express = require('express');

const router = express.Router();

const controllerProducts = require('../controllers/controllerProducts');
const validation = require('../middlewares/validation')

router
.route('/products')
.post(
  validation.validationNameTrue,
  validation.validationLength,
  validation.validationFindName,
  validation.validationQuantityTrue,
  validation.validationQuantityIsInteger,

  controllerProducts.createProduct)
.get(controllerProducts.getColumn);

module.exports = router;