const express = require("express");

const { create, auth, validateAuth } = require("../controllers/authController");

const router = express.Router();

/* GET users listing. */
router.post("/new", create);
router.get("/login", auth);
router.get("/auth/verificationcode/:verificationCode", validateAuth);

module.exports = router;
