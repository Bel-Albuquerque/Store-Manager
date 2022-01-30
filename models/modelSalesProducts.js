const connection = require('./connection');

// Referência "connection.query" do perfeito Guilherme Gomes!!!
const createSalesProducts = async (par1, par2, par3) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;
  await connection.execute(query, [par1, par2, par3]);
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

const deleteSalesProducts = async (saleId) => {
  const query = `   
  DELETE FROM StoreManager.sales_products
  WHERE sale_id = ?`;
  await connection.execute(query, [saleId]);
};

module.exports = {
  createSalesProducts,
  getAllSalesAndProducts,
  getSalesAndProductsById,
  updateSalesProducts,
  deleteSalesProducts,
};