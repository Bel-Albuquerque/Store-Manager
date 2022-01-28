const express = require('express');
const controllerSales = require('../controllers/controllerSales');
const validations = require('../middlewares/validation');

const router = express.Router();

router
.route('/:id')
.get(controllerSales.getSalesAndProductsById)
.put(
  validations.validationQuantityTrue,
  validations.validationPoductIdTrue,
  validations.validationQuantityIsInteger,
  controllerSales.updateSalesProducts,
  );

router
.route('/')
.post(
  validations.validationPoductIdTrue,
  validations.validationQuantityTrue,
  validations.validationQuantityIsInteger,
  controllerSales.createSales,
)
.get(controllerSales.getAllSalesAndProducts);

module.exports = router;