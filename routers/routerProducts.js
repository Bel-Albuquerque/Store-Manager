const express = require('express');

const router = express.Router();

const controllerProducts = require('../controllers/controllerProducts');
const validation = require('../middlewares/validation');

router
.route('/:id')
.get(controllerProducts.getById)
.put(
  validation.validationProductExists,
  validation.validationLength,
  validation.validationQuantityIsInteger,
  controllerProducts.editById,
)
.delete(
  validation.validationProductExists,
  controllerProducts.deletById,
  );

router
.route('/')
.post(
  validation.validationNameTrue,
  validation.validationLength,
  validation.validationFindName,
  validation.validationQuantityTrue,
  validation.validationQuantityIsInteger,
  controllerProducts.createProduct,
)
.get(controllerProducts.getColumn);

module.exports = router;