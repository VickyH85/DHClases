// ************ Require's ************
const express = require('express');
const router = express.Router();
const userAdmin = require('../middlewares/userAdmin');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin', userAdmin, mainController.admin);

module.exports = router;
