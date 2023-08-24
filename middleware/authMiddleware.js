module.exports = (req, res, next) => {
    // Verificar si el usuario está autenticado (por ejemplo, utilizando Passport.js)
    if (req.isAuthenticated()) {
      return next(); // Continuar con la siguiente función en la ruta
    } else {
      return res.status(401).json({ error: 'No autorizado' });
    }
  };
  