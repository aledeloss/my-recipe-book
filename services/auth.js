const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");
const publicKey = fs.readFileSync("./keys/public.pem");

const signOptions = { expiresIn: "8h" };

const createToken = (payload) => {
  jwt.sign(payload, privateKey, signOptions);
};
const decodeToken = (payload) => {};

module.exports = { createToken, decodeToken };
