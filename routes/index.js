var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res) {
  res.redirect('/users');
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] } // what your application is allowed to access
  ));
  
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/users/library',
      failureRedirect : '/users'
    }
  ));
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/users');
  });


module.exports = router;