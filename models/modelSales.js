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

module.exports = {
  createSales,
  getSales,
};