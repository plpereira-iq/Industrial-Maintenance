const express = require('express');
const { sendEmailReprogramar } = require('../controller/reprogramarEmailController');

const router = express.Router();

router.post('/send-emailReprogramar', sendEmailReprogramar);

module.exports = router;