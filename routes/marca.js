// Express
var express = require('express');
var router = express.Router();
// Controller
const marcaController = require('../controllers/marcaController');

/* GET home page. */
router.get('/', marcaController.index);

module.exports = router;
