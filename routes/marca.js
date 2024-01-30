// Express
var express = require('express');
var router = express.Router();
// Controller
const marcaController = require('../controllers/marcaController');

/* GET home page. */
router.get('/', marcaController.index);
router.get('/:marca', marcaController.marca);

module.exports = router;
