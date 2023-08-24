// controllers/productController.js

const Product = require('../models/Product');

// Función para obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Función para crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    // Lógica para crear un nuevo producto en la base de datos
    // ...
    res.status(201).json({ message: 'Producto creado exitosamente.' });
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Otras funciones relacionadas con productos
