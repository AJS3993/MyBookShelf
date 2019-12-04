var User = require('../models/user');

module.exports = {
  index,
  show
};

function index(req, res) {
 res.render('users/library', {user: req.user});
 }


function show(req, res){

  var id = req.params.id;
  console.log(id)
  User.findOne({"library._id": id}, function(err, user) {
  console.log(user)
   book = user.library.id(id)

    res.render('users/details', {user: req.user});
  })}

