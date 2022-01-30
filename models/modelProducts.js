const connection = require('./connection');

const createProduct = async (name, quantity) => {
  const [insert] = await connection.execute(
    `
    INSERT INTO StoreManager.products (name, quantity)
    VALUE
    (?, ?)
    `, [name, quantity],
  );
  return { id: insert.insertId };
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

const changeProductQuantity = async (id, quantity) => {
  const query = `
  UPDATE StoreManager.products
  SET quantity = ?
  WHERE id = ?`;
  await connection.execute(query, [quantity, id]);
};

module.exports = {
  createProduct,
  getColumn,
  getById,
  editById,
  deletById,
  changeProductQuantity,
};