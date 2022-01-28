const express = require('express');
const controllerSales = require('../controllers/controllerSales');
const validations = require('../middlewares/validation');

const router = express.Router();

router
.route('/')
.post(
  validations.validationPoductIdTrue,
  validations.validationQuantityTrue,
  validations.validationQuantityIsInteger,
  controllerSales.createSales,
);

module.exports = router;