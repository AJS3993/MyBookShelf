var router = require('express').Router();
var settingsCtrl = require('../controllers/settings');



router.get('/settings', settingsCtrl.index);
// router.get('/settings/new', settingsCtrl.new);
// router.get('/settings/:id', settingsCtrl.show);


module.exports = router;