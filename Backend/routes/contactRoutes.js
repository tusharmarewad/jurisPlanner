const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactControllers');

router.post('/contact', contactController.sendContactForm);

module.exports = router;
