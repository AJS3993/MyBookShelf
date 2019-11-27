var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.post('/', usersCtrl.create);



// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;
