const registerTemplate = ({ name, verificationCode }) =>
  `
        <html>
        <head></head>
        <body>
            <h3>¡Hola ${name}. Gracias por registrarte ahora! 🙌</h3>
            <a href="${process.env.DEV_URL}/auth/verificationCode/${verificationCode}">Haz click acá para confirmar la cuenta!</a>
        </body>
        </html>
    `;

module.exports = { registerTemplate };
