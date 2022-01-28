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

const getAllSalesAndProducts = async () => {
  const [result] = await connection.execute(
    `SELECT p.sale_id, s.date, p.product_id, p.quantity FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products p`
  );
  return result;
}

const getSalesAndProductsById = async (id) => {
  const [result] = await connection.execute(
  `SELECT p.sale_id, s.date, p.product_id, p.quantity FROM StoreManager.sales s
INNER JOIN StoreManager.sales_products p
ON s.id = p.sale_id`, [id],
);
  return result;
};

module.exports = {
  createSalesProducts,
  getSalesProducts,
  getAllSalesAndProducts,
  getSalesAndProductsById,
};