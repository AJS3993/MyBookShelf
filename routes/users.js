var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.get('/edit/:id', usersCtrl.show);
router.post('/:id', usersCtrl.create);
router.delete('/library/:id', usersCtrl.delete);
router.get('/library/:id', usersCtrl.edit);




// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;