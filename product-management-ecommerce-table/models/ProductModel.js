const {postgres} = require('../config/Database');

module.exports = {
  getAllProducts: async () => {
    try {
      const query = 'SELECT * FROM products';
      const result = await postgres.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  createProduct: async (name, price, categoryId) => {
    try {
      const query = 'INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING*';
      const values = [name, price, categoryId];
      const result = await postgres.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (productId, name, price) => {
    try {
      const query = 'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING*';
      const values = [name, price, productId];
      const result = await postgres.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const query = 'DELETE FROM products WHERE id = $1 RETURNING*';
      const result = await postgres.query(query, [productId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },
};
