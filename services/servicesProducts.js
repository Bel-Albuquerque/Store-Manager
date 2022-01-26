const modelProducts = require('../models/modelProducts');

const createProduct = async (name, quantity) => {
 modelProducts.createProduct(name, quantity);
 return true;
};

module.exports = {
  createProduct,
};
// if(!name) return 400

// if(name.length < 5 || typeof quantity !== Number || quantity < 0) return 422

// if (getAllName().includes(name)) return 409

// return 201
