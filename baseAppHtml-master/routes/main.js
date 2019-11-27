// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/contacto', mainController.contacto);
router.get('/restaurante', mainController.restaurante);

module.exports = router;
