"use strict";
const nodemailer = require("nodemailer");

const sendMail = async ({
  to = process.env.USER_EMAIL,
  subject = "prueba de correo",
  html,
}) => {
  //const testAccount = await nodemailer.createTestAccount();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER_EMAIL, // generated ethereal user
        pass: process.env.PASSWORD_EMAIL, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false, // para que gmail no rechace los correos salientes cuando la configuración secure esté en false.
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"My recipe-book" <recipeBook@noreplay.com>',
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    console.log(e);
    throw e;
  }

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = { sendMail };
