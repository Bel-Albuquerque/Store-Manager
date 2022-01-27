const modelProducts = require('../models/modelProducts');

const createProduct = async (name, quantity) => {
 await modelProducts.createProduct(name, quantity);
};

const getColumn = async (param) => {
const result = await modelProducts.getColumn(param);
return result;
};

const getById = async (id) => {
  const result = await modelProducts.getById(id);
  return result;
};

const editById = async (name, quantity, id) => {
  await modelProducts.editById(name, quantity, id);
};

module.exports = {
  createProduct,
  getColumn,
  getById,
  editById,
};
