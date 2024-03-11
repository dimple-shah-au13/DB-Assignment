const router = require('express').Router();

const CategoryController = require('../.././product-management-ecommerce-table/controllers/CategoryController');
const ProductController = require('../.././product-management-ecommerce-table/controllers/ProductController');

// products routes
router.get('/get-all-products', ProductController.getAllProducts);
router.post('/submit-products', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);


// categories routes
router.get('/get-all-categories', CategoryController.getAllCategories);
router.post('/submit-categories', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);


module.exports = router;