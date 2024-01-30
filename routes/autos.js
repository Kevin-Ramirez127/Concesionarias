// Express
var express = require('express');
var router = express.Router();
// Controller
const autosController = require('../controllers/autosController');

/* GET home page. */
router.get('/', autosController.index);
router.get('/:marca', autosController.marca);
router.get('/:marca/:dato', autosController.dato);

module.exports = router;
