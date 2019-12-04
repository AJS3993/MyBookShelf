var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notepad.js');

router.get('/notepad', notesCtrl.index);
router.post('/', notesCtrl.create);
router.delete('/:id', notesCtrl.delete);


module.exports = router;