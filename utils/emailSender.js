const nodemailer = require('nodemailer');

// Configura el transportador de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto según el servicio de correo que estés utilizando
  auth: {
    user: 'tu-email@gmail.com', // Cambia esto con tu dirección de correo
    pass: 'tu-contraseña', // Cambia esto con tu contraseña
  },
});

// Función para enviar un correo electrónico
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: 'tu-email@gmail.com', // Tu dirección de correo
      to,
      subject,
      text,
    });
    console.log(`Correo electrónico enviado: ${info.response}`);
  } catch (error) {
    console.error(`Error al enviar el correo electrónico: ${error}`);
  }
};

module.exports = sendEmail;
