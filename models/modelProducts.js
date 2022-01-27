const connection = require('./connection');

const createProduct = async (name, quantity) => {
  await connection.execute(
    `
    INSERT INTO StoreManager.products (name, quantity)
    VALUE
    (?, ?)
    `, [name, quantity],
  );
};

const getColumn = async (param) => {
  const [result] = await connection.execute(`SELECT ${param} FROM StoreManager.products`);
  return result;
};

module.exports = {
  createProduct,
  getColumn,
};