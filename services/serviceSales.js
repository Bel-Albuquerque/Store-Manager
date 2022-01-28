/* eslint-disable max-lines-per-function */
/* eslint-disable semi */
const modelSales = require('../models/modelSales');
const modelSalesProducts = require('../models/modelSalesProducts');

const createSalesProducts = async (arraySale) => {
  const id = await modelSales.createSales();
  if (!arraySale) return false;
  const objSale = {
    id,
    itemsSold: arraySale,
  };
  
  const promiseSale = arraySale.map(async ({ product_id, quantity }) => {
    await modelSalesProducts.createSalesProducts(id, product_id, quantity);
  });

  await Promise.all(promiseSale);

  return objSale;
};

const getAllSalesAndProducts = async () => {
  const allSales = await modelSalesProducts.getAllSalesAndProducts();
  return allSales;
};

const getSalesAndProductsById = async (id) => {
  const saleById = await modelSalesProducts.getSalesAndProductsById(id);
  return saleById;
};

const updateSalesProducts = async (saleId, arrayBody) => {
  const objSale = {
    saleId: Number(saleId),
    itemUpdated: arrayBody,
  };

  const { product_id, quantity } = arrayBody[0];
  
  console.log(saleId);
  console.log(product_id);
  console.log(quantity);
  console.log(objSale);
  await modelSalesProducts.updateSalesProducts(Number(saleId), product_id, quantity);

  return objSale;
};

module.exports = {
  createSalesProducts,
  getAllSalesAndProducts,
  getSalesAndProductsById,
  updateSalesProducts,
};