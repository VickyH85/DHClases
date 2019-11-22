// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/contacto', mainController.contacto);
router.get('/ejercicio1', mainController.ejercicio1);

module.exports = router;
