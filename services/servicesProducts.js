const modelProducts = require('../models/modelProducts');

const createProduct = async (name, quantity) => {
 await modelProducts.createProduct(name, quantity);
 return true;
};

const getColumn = async (param = '*') => {
const result = await modelProducts.getColumn(param);
return result;
};

module.exports = {
  createProduct,
  getColumn,
};
// if(!name) return 400

// if(name.length < 5 || typeof quantity !== Number || quantity < 0) return 422

// if (getAllName().includes(name)) return 409

// return 201
