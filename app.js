const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const apiRoutes = require('./src/routes/apiRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const purchaseRoutes = require('./src/routes/purchaseRoutes');

// Configuración de la base de datos
mongoose.connect('mongodb://localhost/ecommerce_db', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Conexión a la base de datos establecida.');
});

// Configuración de sesiones y Passport.js
app.use(session({ secret: 'tu-secreto-seguro', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configuración del middleware bodyParser para procesar JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);
app.use('/purchase', purchaseRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
