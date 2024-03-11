const express = require('express');
const router = express.Router();
const ProductModel = require('../.././product-management-ecommerce-table/models/ProductModel');



module.exports = {
    getAllProducts:  async (req, res) => {
        try {
          const products = await ProductModel.getAllProducts();
          res.render('index', { products });
        } catch (error) {
          console.error('Error fetching products:', error);
          res.status(500).send('Internal Server Error');
        }
      },

      createProduct: async (req, res) => {
        try {
          const { name, price, categoryId } = req.body;
          const newProduct = await ProductModel.createProduct(name, price, categoryId);
          res.status(201).json(newProduct);
        } catch (error) {
          console.error('Error creating product:', error);
          res.status(500).send('Internal Server Error');
        }
      },

      updateProduct : async (req, res) => {
        try {
          const productId = parseInt(req.params.id);
          const { name, price } = req.body;
          const updatedProduct = await ProductModel.updateProduct(productId, name, price);
          res.status(200).json(updatedProduct);
        } catch (error) {
          console.error('Error updating product:', error);
          res.status(500).send('Internal Server Error');
        }
      },

      deleteProduct : async (req, res) => {
        try {
          const productId = parseInt(req.params.id);
          const deletedProduct = await ProductModel.deleteProduct(productId);
          res.status(200).json(deletedProduct);
        } catch (error) {
          console.error('Error deleting product:', error);
          res.status(500).send('Internal Server Error');
        }
      }

}
