const {postgres} = require('../config/Database');

module.exports = {
  getAllCategories: async () => {
    try {
      const query = 'SELECT * FROM categories';
      const result = await postgres.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  createCategory: async (name, description) => {
    try {
      const query = 'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING*';
      const values = [name, description];
      const result = await postgres.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },

  updateCategory: async (categoryId, name, description) => {
    try {
      const query = 'UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING*';
      const values = [name, description, categoryId];
      const result = await postgres.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const query = 'DELETE FROM categories WHERE id = $1 RETURNING*';
      const result = await postgres.query(query, [categoryId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  },
};
