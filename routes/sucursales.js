// Express
var express = require('express');
var router = express.Router();
// Controller
const sucursalesController = require('../controllers/sucursalesController');

/* GET home page. */
router.get('/', sucursalesController.index);

router.get('/:sucursal', sucursalesController.sucursal);

module.exports = router;
