const express = require('express');
const LoginController = require('./../Controllers/LoginController');
const router = express.Router();

router.route('/login').post(LoginController.login);

module.exports = router;
