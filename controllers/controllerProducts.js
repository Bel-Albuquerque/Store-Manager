const servicesProducts = require('../services/servicesProducts');

const createProducts = async (req, res) => {
  const { name, quantity } = req.body;
  servicesProducts.createProduct(name, quantity);
  res.status(201).json({ message: 'deu certo' });
};

module.exports = {
  createProducts;
}