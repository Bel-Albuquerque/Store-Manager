const connection = require('./connection');

const createSales = async () => {
  const [insert] = await connection.execute(
    `
    INSERT INTO StoreManager.sales ()
    VALUE()
    `,
  );
  return insert.insertId;
};

const getSales = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales');
  return result;
};

const deleteSales = async (id) => {
  const query = `
  DELETE FROM StoreManager.sales
  WHERE id = ?`;
  const sale = await connection.execute(query, [id]);
  return sale;
};

module.exports = {
  createSales,
  getSales,
};