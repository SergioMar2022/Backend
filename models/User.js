// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Otros campos y opciones de esquema
});

module.exports = mongoose.model('User', userSchema);
