var User = require('../models/user');

module.exports = {
  index,
  create,
  show
};

function index(req, res) {
  User.library.find({}, function(err, user) {
  res.render('users/library');
 })}

 function create(req, res) {
  
  req.user.library.push(req.body);
  req.user.save(function(err) {
      console.log(user)
      res.redirect(`/library/${user._id}`);
    });
  }

function show(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.render('users/library');
  });
  }
