 var router = require('express').Router();
var libraryCtrl = require('../controllers/library');


router.get('/library', libraryCtrl.index);
router.get('/library/:id', libraryCtrl.show);
router.put('/a', libraryCtrl.update);




module.exports = router;