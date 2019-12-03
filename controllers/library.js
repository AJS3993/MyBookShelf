var User = require('../models/user');

module.exports = {
  index,
  show
};

function index(req, res) {
  User.library.find({}, function(err, user) {
  res.render('users/library');
 })}


  // function show(req, res) {
  //   console.log('library show')
  //   User.findById(req.params.id, function(err, user) {
  //     res.render('users/details', {user: req.user});
  //   });
  //   }

// function show(req, res){
    
// var id = req.params.id
    
//     User.findOne({"library._id": id}, function(err, book) {
//     res.render('users/details')
  
//   })
// }

// function show(req, res) {
//   var id = req.params.id
//     User.find({"library._id": id}, function(err, library) {
//     res.render('users/details', {user: req.user} );
//   });
//   }


function show(req, res){
  var id = req.params.id;
  // console.log(id)
  User.findOne({"library._id": id}, function(err, user) {
  // console.log(user)
   book = user.library.id(id)
    res.render('users/details', book);
  })}

