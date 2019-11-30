var User = require('../models/user');

module.exports = {
  index,
  new: newBook,
  show,
  create,
  delete: deleteBook
};

function index(req, res) {
  console.log('users index')
  res.render('users/index', {user: req.user});
 }
 
 function newBook(req, res) {
   console.log('users newbook')
  res.render('users/new');
}

function create(req, res) {

console.log('users create')

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
  console.log('users show')
    res.render('users/library', {user: req.user});
  }

  function deleteBook(req, res) {
    console.log('users delete')
      User.deleteOne(function(err) {
      res.redirect(`/users/library`);
    })
  }
  
  // function deleteFlight(req, res) {
  //   Flight.findById(req.params.id, function(err, flight){
  //   flight.deleteOne(function(err) {
  //     res.redirect(`/flights/`);
  //   })
  // })
  // }