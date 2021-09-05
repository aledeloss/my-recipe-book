const User = require("../models/User");
const uid = require("node-uuid");
const { hash, unhash } = require("../utils/bcrypt");
const { createToken } = require("../services/auth");
const { sendMail } = require("../services/mailing");
const { registerTemplate } = require("../utils/registerTemplate");
const { enable } = require("debug");

const auth = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, { password: 1, role: 1 });
  const passwordIsValid = unhash(password, user.password);

  const JWTObject = {
    _id: user._id,
    email,
    role,
  };

  const JWT = createToken(JWTObject);

  if (passwordIsValid) {
    res.json({ message: "Bienvenide", JWT: user._id });
  } else {
    res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    console.log(isPasswordValid);
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user)
      return res.status(400).json({ message: "El email ya está en uso" });
    user = new User(req.body); // crea el modelo con los datos del body
    user.password = hash(password);
    const verificationCode = uid();
    user.verificationCode = verificationCode;
    await user.save(); // guarda el modelo en la db
    sendMail({
      to: email,
      subject: "Gracias por registrarte :)",
      html: registerTemplate({ name, verificationCode }),
    });
    console.log(user.password);
    res.sendStatus(201);
    console.log(user);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const validateAuth = async (req, res) => {
  console.log("hola");
  // try {
  //   const { verificationCode } = req.params;
  //   if (verificationCode) console.log("código", verificationCode);
  //   res.redirect(process.env.DEV_URL); //cambiar por frontend
  //   //await User.find({ verificationCode }, { enable: true });
  //   //    res.json({ message: "activado" });
  // } catch (e) {
  //   console.log(e);
  //   res.redirect(`${process.env.DEV_URL}?error=invalidCode`);
  // }
};

module.exports = { create, auth, validateAuth };
