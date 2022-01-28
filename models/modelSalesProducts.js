const connection = require('./connection');

// Referência "connection.query" do perfeito Guilherme Gomes!!!
const createSalesProducts = async (array) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;
  const sale = await connection.query(query, array);
  return sale;
};

const getSalesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales_products');
  return result;
};

module.exports = {
  createSalesProducts,
  getSalesProducts,
};