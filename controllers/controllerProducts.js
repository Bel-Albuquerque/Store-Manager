const servicesProducts = require('../services/servicesProducts');

// const validationNameTrue = (req, res, next) => {
//   const { name } = req.body;
//   if (!name) {
//  return res.status(400).json(
//     { message: '\'name\' is required' },
// ); 
// }
// next();
// };

// const validationLength = (req, res, next) => {
//   const { name } = req.body;
//   if (name.length < 5) {
//  return res.status(422).json(
//     { message: '"name" length must be at least 5 characters long' },
// ); 
// }
// next();
// };

// const validationFindName = async (req, res, next) => {
//   const { name } = req.body;
//   const allProductsNames = await servicesProducts.getColumn('name');
//   const findName = allProductsNames.some((productName) => productName.name === name);

//     if (findName) {
//  return res.status(409).json(
//   { message: 'Product already exists' },
// ); 
// }
// next();
// };

// const validationQuantityTrue = (req, res, next) => {
//   const { quantity } = req.body;
//   if (!quantity || quantity !== 0) {
//  return res.status(400).json(
//     { message: '\'quantity\' is required' },
// ); 
// }
// next();
// };

// const validationQuantityIsInteger = (req, res, next) => {
//   const { quantity } = req.body;
//   if (typeof quantity !== 'number' || quantity < 1) {
//  return res.status(422).json(
//   { message: '"quantity" must be a number larger than or equal to 1' },
// ); 
// }
// next();
// };

const findProduct = async (porductName) => {
  const allProductsNames = await servicesProducts.getColumn('*');
  const result = allProductsNames.find((product) => product.name === porductName);
  return result;
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
console.log(name);
console.log(quantity);
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