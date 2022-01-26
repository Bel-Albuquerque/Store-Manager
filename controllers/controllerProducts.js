const servicesProducts = require('../services/servicesProducts');

const findProduct = async (porductName) => {
  const allProductsNames = await servicesProducts.getColumn('*');
  const result = allProductsNames.find((product) => product.name === porductName);
  return result;
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  await servicesProducts.createProduct(name, quantity);
  const product = await findProduct(name);
  return res.status(201).json(product);
};

const getColumn = async (req, res) => {
  const result = await servicesProducts.getColumn('*');
  return res.status(201).json(result);
};

module.exports = {
  createProduct,
  getColumn,
};