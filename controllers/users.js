var User = require('../models/user');

module.exports = {
  index,
  new: newBook,
  create,
  delete: deleteBook,
  edit,
  show
};



function edit(req, res) {
  console.log('users edit')
   User.find({}, function(err, book) {
  res.render('users/edit', {
    book,
    idx: req.params.id
  });
})}

function index(req, res) {
  console.log('users index')
  res.render('users/index', {user: req.user});
 }
 
 function newBook(req, res) {
   console.log('users newbook')
  res.render('users/new', {user: req.user});
}

function create(req, res) {

console.log('users create')

for (let key in req.body) {
  if (req.body[key] === '') delete req.body[key];
}

    req.user.library.push(req.body);
    req.user.save().then(function(err) {


    res.redirect('../users/library');
  })
}

  function deleteBook(req, res) {
    
    var id = req.params.id
    
    User.findOne({"library._id": id}, function(err, user) {
      user.library.id(id).remove();
      
      
      user.save();
    
      res.redirect(`/users/library`);
  
  })}
    
  function show(req, res) {
    console.log('show')
    var id = req.params.id;

    User.findOne({"library._id": id}, function(err, user) {
   
     book = user.library.id(id)
    
     res.render('users/edit', {
     book, user: req.user
    })})}
