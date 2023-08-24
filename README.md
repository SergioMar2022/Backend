# Proyecto de Comercio Electrónico - Backend

Este es el backend para una aplicación de comercio electrónico. A continuación, se detalla cómo configurar y ejecutar la aplicación.

## Configuración

1. Clona este repositorio en tu máquina local.

2. Instala las dependencias utilizando `npm install`.

3. Configura la base de datos en el archivo `config.js`.

```javascript
module.exports = {
  database: {
    url: 'mongodb://localhost/ecommerce_db',
  },
  secretKey: 'tu-secreto-seguro',
};
