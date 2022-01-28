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

const getSalesProducts = async () => {
  const allSales = await modelSalesProducts.getSalesProducts()
  return allSales;
};

module.exports = {
  createSalesProducts,
  getSalesProducts,
};