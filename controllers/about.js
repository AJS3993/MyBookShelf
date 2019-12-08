var User = require('../models/user');

module.exports = {
    index
  };
  
  function index(req, res) {
    console.log('about index')
    res.render('users/about', {user: req.user});
   }