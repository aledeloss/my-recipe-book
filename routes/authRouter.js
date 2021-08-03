const express = require('express');

const { create, auth } = require('../controllers/authController');

const router = express.Router();

/* GET users listing. */
router.post('/new', create);
router.get('/login', auth  );

module.exports = router;
