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

const getById = async (id) => {
  const [result] = await connection.execute(`
  SELECT * FROM StoreManager.products WHERE id = ?
  `, [id]);
  return result;
};

module.exports = {
  createProduct,
  getColumn,
  getById,
};