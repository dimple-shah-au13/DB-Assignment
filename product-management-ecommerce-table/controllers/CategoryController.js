const express = require('express');
const router = express.Router();
const CategoryModel = require('../.././product-management-ecommerce-table/models/CategoryModel');


module.exports = {
    getAllCategories:  async (req, res) => {
        try {
          const categories = await CategoryModel.getAllCategories();
          res.render('index', { categories });
        } catch (error) {
          console.error('Error fetching categories:', error);
          res.status(500).send('Internal Server Error');
        }
      },

      createCategory:  async (req, res) => {
        try {
          const { name, description } = req.body;
          const newCategory = await CategoryModel.createCategory(name, description);
          res.status(201).json(newCategory);
        } catch (error) {
          console.error('Error creating category:', error);
          res.status(500).send('Internal Server Error');
        }
      }, 
      
      updateCategory : async (req, res) => {
        try {
          const categoryId = parseInt(req.params.id);
          const { name, description } = req.body;
          const updatedCategory = await CategoryModel.updateCategory(categoryId, name, description);
          res.status(200).json(updatedCategory);
        } catch (error) {
          console.error('Error updating category:', error);
          res.status(500).send('Internal Server Error');
        }
      },

      deleteCategory : async (req, res) => {
        try {
          const categoryId = parseInt(req.params.id);
          const deletedCategory = await CategoryModel.deleteCategory(categoryId);
          res.status(200).json(deletedCategory);
        } catch (error) {
          console.error('Error deleting category:', error);
          res.status(500).send('Internal Server Error');
        }
      }

}

