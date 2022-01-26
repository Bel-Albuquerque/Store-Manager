const modelProducts = require('../models/modelProducts');

const createProduct = async (name, quantity) => {
 await modelProducts.createProduct(name, quantity);
};

const getColumn = async (param) => {
const result = await modelProducts.getColumn(param);
return result;
};

module.exports = {
  createProduct,
  getColumn,
};
