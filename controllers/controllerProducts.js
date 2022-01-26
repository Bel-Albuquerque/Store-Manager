const servicesProducts = require('../services/servicesProducts');

const createProducts = async (req, res) => {
  const { name, quantity } = req.body;
  await servicesProducts.createProduct(name, quantity);
  return res.status(201).json({ message: 'deu certo' });
};

const getColumn = async (req, res) => {
  const result = await servicesProducts.getColumn('name');
  return res.status(201).json(result);
};

module.exports = {
  createProducts,
  getColumn,
};