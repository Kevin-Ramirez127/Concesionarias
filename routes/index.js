// Express
var express = require('express');
var router = express.Router();
// Controller
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
