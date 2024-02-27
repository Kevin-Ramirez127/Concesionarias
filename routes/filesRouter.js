// Express
var express = require('express');
var router = express.Router();
// Controller
const filesController = require('../controllers/filesController');

/* GET home page. */
router.get('/images/:file', filesController.image);

module.exports = router;
