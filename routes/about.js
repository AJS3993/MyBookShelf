var router = require('express').Router();
var aboutCtrl = require('../controllers/about');



router.get('/about', aboutCtrl.index);


module.exports = router;