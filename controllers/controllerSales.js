const serviceSales = require('../services/serviceSales');

const createSales = async (req, res) => {
  const array = req.body;
 const response = await serviceSales.createSalesProducts(array);
if (!response) return res.status(404).json({ message: 'Sale not found' });
 return res.status(201).json(response);
};

const getAllSalesAndProducts = async (req, res) => {
const allSales = await serviceSales.getAllSalesAndProducts();
  return res.status(200).json(allSales);
};

const getSalesAndProductsById = async (req, res) => {
  const { id } = req.params;
  const saleById = await serviceSales.getSalesAndProductsById(id);
  if (saleById.length < 1) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(saleById);
};

const updateSalesProducts = async (req, res) => {
  const { id } = req.params;
  const array = req.body;
  const result = await serviceSales.updateSalesProducts(id, array);

  return res.status(200).json(result);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const result = await serviceSales.deleteSales(Number(id));

  return res.status(200).json(result);
};

module.exports = {
  createSales,
  getAllSalesAndProducts,
  getSalesAndProductsById,
  updateSalesProducts,
  deleteSales,
};
