var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notepad.js');

router.get('/notepad', notesCtrl.index);
router.post('/notepad', notesCtrl.create);
router.delete('/notepad/:id', notesCtrl.delete);


module.exports = router;