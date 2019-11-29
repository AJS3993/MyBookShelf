var User = require('../models/user');

module.exports = {
  index,
  new: newBook,
  show,
  create,
  delete: deleteBook
};

function index(req, res) {
  res.render('users/index', {user: req.user});
 }
 
 function newBook(req, res) {
  res.render('users/new');
}

function create(req, res) {


  var user = new User(req.body);
  user.save(function(err) {
    if (err) return res.render('/new');
    console.log(user);

    req.user.library.push(req.body);
    req.user.save(function(err) {



    res.redirect('../users/library');
  })
})}



function show(req, res){
    res.render('users/library', {user: req.user});
  }

  function deleteBook(req, res) {
    User.findById(req.params.id, function(err, user){
    user.library.deleteOne(function(err) {
      res.redirect(`/library/`);
    })
  })
  }
  