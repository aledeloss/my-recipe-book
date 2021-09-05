const { sendMail } = require("../services/mailing");
const { contactTemplate } = require("../utils/contactTemplate");

const contactEmail = async (req, res) => {
  try {
    const html = contactTemplate("Pablito");
    await sendMail(html);
    res.json({ message: "Enviaste tu receta!" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { contactEmail };
