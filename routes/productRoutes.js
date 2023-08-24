const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para eliminar un producto
router.delete('/api/products/:productId', productController.deleteProduct);

module.exports = router;
