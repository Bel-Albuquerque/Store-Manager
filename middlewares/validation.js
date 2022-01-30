const servicesProducts = require('../services/servicesProducts');
const serviceSales = require('../services/serviceSales');

const validationNameTrue = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
 return res.status(400).json(
    { message: '"name" is required' },
); 
}
next();
};

const validationLength = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
 return res.status(422).json(
    { message: '"name" length must be at least 5 characters long' },
); 
}
next();
};

const validationFindName = async (req, res, next) => {
  const { name } = req.body;
  const allProductsNames = await servicesProducts.getColumn('name');
  const findName = allProductsNames.some((productName) => productName.name === name);

    if (findName) {
 return res.status(409).json(
  { message: 'Product already exists' },
); 
}
next();
};

const validationQuantityTrue = (req, res, next) => {
  const requestFormat = Array.isArray(req.body);
  const quantity = requestFormat ? req.body[0].quantity : req.body.quantity; 
  if (quantity === undefined) {
 return res.status(400).json(
    { message: '"quantity" is required' },
); 
}
next();
};

const validationQuantityIsInteger = (req, res, next) => {
  const requestFormat = Array.isArray(req.body);
  const quantity = requestFormat ? req.body[0].quantity : req.body.quantity; 
  if (typeof quantity !== 'number' || quantity < 1) {
 return res.status(422).json(
  { message: '"quantity" must be a number larger than or equal to 1' },
); 
}
next();
};

const validationProductExists = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await servicesProducts.getColumn('*');
  const findById = allProducts.some((product) => product.id === Number(id));

    if (!findById) {
 return res.status(404).json(
  { message: 'Product not found' },
); 
}
next();
};

const validationPoductIdTrue = (req, res, next) => {
  const bodyProducts = req.body;
  if (!bodyProducts[0].product_id) {
 return res.status(400).json(
    { message: '"product_id" is required' },
); 
}
next();
};

const validationSale = async (req, res, next) => {
  const { id } = req.params;
  const allSales = await serviceSales.getSalesAndProductsById(Number(id));
  if (allSales.length < 1) return res.status(404).json({ message: 'Sale not found' });
  next();
};

// const changeProducts = async (req, res, next) => {
//   const arrayBody = req.body;

//   const updateProductsQuantitys = arrayBody.map(async ({ product_id, quantity }) => {
//     await servicesProducts.changeProductQuantity(product_id, quantity);
//   });

//   console.log(updateProductsQuantitys);
//   await Promise.all(await updateProductsQuantitys);

//   const itWorked = updateProductsQuantitys.some((result) => result === 'false');
//   if (itWorked) return res.status(422).json({ message: 'Such amount is not permitted to sell' });
//   next();
// };

module.exports = {
  validationNameTrue,
  validationLength,
  validationFindName,
  validationQuantityTrue,
  validationQuantityIsInteger,
  validationProductExists,
  validationPoductIdTrue,
  validationSale,
  // changeProducts,
};