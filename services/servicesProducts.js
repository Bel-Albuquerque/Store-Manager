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

const deletById = async (id) => {
  await modelProducts.deletById(id);
};

// const changeProductQuantity = async (id, quantity0, quantity = 0) => {
//   const product = await modelProducts.getById(id);
//   console.log(product[0]);
//   if (quantity === 0) {
//     const newQuantity = product[0].quantity - quantity0;
//      if (newQuantity < 0) return 'false';

//       await modelProducts.changeProductQuantity(id, newQuantity);
//       return true;
//   }

//   const newQuantity = product[0].quantity + (quantity0 - quantity);
//   if (newQuantity < 0) return 'false';

//   await modelProducts.changeProductQuantity(id, newQuantity);
//   return true;
// };

module.exports = {
  createProduct,
  getColumn,
  getById,
  editById,
  deletById,
  // changeProductQuantity,
};
