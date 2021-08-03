const User = require("../models/User");
const { hash, unhash } = require("../utils/bcrypt");
const { createToken } = require("../services/auth");

const auth = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, { password: 1 });
  const passwordIsValid = unhash(password, user.password);

  const JWTObject = {
    _id: user._id,
    email 
  };

  const JWT = createToken(JWTObject);

  if (passwordIsValid) {
    res.json({ message: "Bienvenide", JWT: user._id });
  }
  res.status(401).json({ message: "Usuario o contraseña incorrectos" });
  console.log(isPasswordValid);
  res.end();
};

const create = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user)
      return res.status(400).json({ message: "El email ya está en uso" });
    user = new User(req.body); // crea el modelo con los datos del body
    user.password = hash(password);
    console.log(user.password);
    await user.save(); // guarda el modelo en la db
    res.sendStatus(201);
    console.log(user);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { create, auth };
