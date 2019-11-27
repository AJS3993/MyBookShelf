var router = require('express').Router();
var libraryCtrl = require('../controllers/library');


router.get('/library', libraryCtrl.index);
router.get('/library/:id', libraryCtrl.show);
router.post('/library/:id/library', libraryCtrl.create);


module.exports = router;