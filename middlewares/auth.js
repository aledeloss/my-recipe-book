const { json } = require("express");
const { decodeToken } = require("../services/auth");

const securedUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = decodeToken(authorization);
    req.id = _id;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    json({
      message: "No autorizado",
      imag: "https://http.cat/401",
    });
  }
};

const secureAdmin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id, role } = decodeToken(authorization);
    if (role !== "admin") throw new Error("No tenés permiso para esta ruta");
    req.id = _id;
    req.role = role;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    json({
      message: "No autorizado",
      imag: "https://http.cat/401",
    });
  }
};

module.exports = { secureAdmin, securedUser };
