/* eslint-disable max-lines-per-function */
/* eslint-disable semi */
const modelSales = require('../models/modelSales');
const modelSalesProducts = require('../models/modelSalesProducts');

const createSalesProducts = async (arraySale) => {
  const id = await modelSales.createSales();
  if (!arraySale) return false
  const objSale = {
    id,
    itemsSold: arraySale,
  };
  
  const array = []
  arraySale.forEach(({ product_id, quantity }) => {
    array.push(id, product_id, quantity);
  });

  await modelSalesProducts.createSalesProducts(array);

  return objSale;
};

const getAllSalesAndProducts = async () => {
  const allSales = await modelSalesProducts.getAllSalesAndProducts()
  return allSales;
};

const getSalesAndProductsById = async (id) => {
  const saleById = await modelSalesProducts.getSalesAndProductsById(id)
  return saleById;
};

module.exports = {
  createSalesProducts,
  getAllSalesAndProducts,
  getSalesAndProductsById,
};