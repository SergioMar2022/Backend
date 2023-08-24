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

Inicia la aplicación con npm start.

Estructura del Proyecto
/src: Contiene el código fuente de la aplicación.
/controllers: Controladores para usuarios y productos.
/models: Modelos de datos para usuarios y productos.
/views: Vistas para administración y compras.
/routes: Rutas para API, productos y usuarios.
/middleware: Middlewares, incluido el de autenticación.
/utils: Utilidades, como el envío de correos electrónicos.
app.js: Punto de entrada de la aplicación.
config.js: Configuración de la base de datos y secretos.
package.json: Archivo de configuración de Node.js.


Licencia
Este proyecto está bajo la Licencia MIT.


