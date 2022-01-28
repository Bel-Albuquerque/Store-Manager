const serviceSales = require('../services/serviceSales');

const createSales = async (req, res) => {
  const array = req.body;
 const response = await serviceSales.createSalesProducts(array);
if (!response) return res.status(404).json({ message: 'Sale not found' });
 return res.status(201).json(response);
};

const getSalesProducts = async (req, res) => {
const allSales = await serviceSales.getSalesProducts();
  return res.status(200).json(allSales);
};

module.exports = {
  createSales,
  getSalesProducts,
};
