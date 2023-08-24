// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  // Otros campos y opciones de esquema
});

module.exports = mongoose.model('Product', productSchema);
