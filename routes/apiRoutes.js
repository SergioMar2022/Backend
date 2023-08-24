const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const ProductController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas de Usuarios
router.post('/registro', UserController.registro);
router.post('/inicio-sesion', UserController.inicioSesion);
router.get('/perfil', authMiddleware, UserController.perfil);

// Rutas de Productos
router.get('/productos', ProductController.obtenerProductos);
router.post('/productos', authMiddleware, ProductController.crearProducto);
router.put('/productos/:id', authMiddleware, ProductController.actualizarProducto);
router.delete('/productos/:id', authMiddleware, ProductController.eliminarProducto);

module.exports = router;
