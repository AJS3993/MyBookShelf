var router = require('express').Router();
var libraryCtrl = require('../controllers/library');


router.get('/library', libraryCtrl.index);


module.exports = router;