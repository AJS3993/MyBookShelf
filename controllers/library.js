var User = require('../models/user');

module.exports = {
  index,
  show,
  update
};

function index(req, res) {
  var message = "Start Adding Books!"
 res.render('users/library', {user: req.user, message});
 }


function show(req, res){
console.log('library show')
  var id = req.params.id;
  console.log(id)
  User.findOne({"library._id": id}, function(err, user) {
  console.log(user)
   book = user.library.id(id)

    res.render('users/details', {user: req.user});
  })}

  function update(req, res) {
    let id = book.id;
    User.findOne({"library._id": id}, function(err, user) {
      let bookArr = user.library;
      bookArr.forEach((library, idx) => {
        if(library._id == id) {
          req.body._id = id;
    
          user.library[idx]._id = id,
          user.library[idx].Title = req.body.Title,
          user.library[idx].Author = req.body.Author,
          user.library[idx].Group = req.body.Group,
          user.library[idx].Rating = req.body.Rating

          user.save().then(
    res.redirect('/users/library')
    )}})})}