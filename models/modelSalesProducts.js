const connection = require('./connection');

// Referência "connection.query" do perfeito Guilherme Gomes!!!
const createSalesProducts = async (par1, par2, par3) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;
  const sale = await connection.execute(query, [par1, par2, par3]);
  return sale;
};

const getSalesProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales_products');
  return result;
};

const getAllSalesAndProducts = async () => {
  const [result] = await connection.execute(
    `SELECT p.sale_id AS saleId, s.date, p.product_id, p.quantity FROM StoreManager.sales s
      INNER JOIN StoreManager.sales_products p
      ON s.id = p.sale_id`,
  );
  return result;
};

const getSalesAndProductsById = async (id) => {
  const [result] = await connection.execute(
  `  SELECT s.date, p.product_id, p.quantity FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products p
  ON s.id = ? AND s.id = p.sale_id`, [id],
);
  return result;
};

const updateSalesProducts = async (id, product, quantity) => {
  const query = `   
  UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE sale_id = ? AND product_id = ?`;
  await connection.execute(query, [quantity, id, product]);

};

module.exports = {
  createSalesProducts,
  getSalesProducts,
  getAllSalesAndProducts,
  getSalesAndProductsById,
  updateSalesProducts,
};