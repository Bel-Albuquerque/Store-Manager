const servicesProducts = require('../services/servicesProducts');

const findProductByName = async (porductName) => {
  const allProductsNames = await servicesProducts.getColumn('*');
  const result = allProductsNames.find((product) => product.name === porductName);
  return result;
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  await servicesProducts.createProduct(name, quantity);
  const product = await findProductByName(name);
  return res.status(201).json(product);
};

const getColumn = async (req, res) => {
  const result = await servicesProducts.getColumn('*');
  return res.status(200).json(result);
};

const findProductById = async (productId) => {
  const allProductsNames = await servicesProducts.getColumn('*');
  const result = allProductsNames.find((product) => product.id === productId);
  return result;
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await findProductById(Number(id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' }); 
}
  return res.status(200).json(product);
};

module.exports = {
  createProduct,
  getColumn,
  getById,
};