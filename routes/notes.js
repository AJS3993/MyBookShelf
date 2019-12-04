  
var router = require('express').Router();
var notesCtrl = require('../controllers/notes');


router.get('/notes', notesCtrl.index);
router.get('/notes/new', notesCtrl.new);
router.get('/notes/:id', notesCtrl.show);
router.put('/notes/update', notesCtrl.update);




module.exports = router;