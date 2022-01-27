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

const editById = async (name, quantity, id) => {
  await connection.execute(
    `
    UPDATE StoreManager.products
    SET name = ?, quantity = ?
    where id = ?`, [name, quantity, id],
  );
};

const deletById = async (id) => {
  await connection.execute(
    `
    DELETE FROM StoreManager.products WHERE id = ?`, [id],
  );
};

module.exports = {
  createProduct,
  getColumn,
  getById,
  editById,
  deletById,
};