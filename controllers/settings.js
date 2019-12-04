var Settings = require('../models/settings');

module.exports = {
    index,
    show,
    new: newSettings
  };
  
  function index(req, res) {
    console.log('settings index')
    res.render('users/settings', {user: req.user});
   }

   function show(req, res){
    console.log('settings show')
    res.render('users/settings', {user: req.user});
  }

  function newSettings(req, res) {
    console.log('settings newSettings')
   res.render('users/settings');
 }