var User = require('../models/user');

module.exports = {
  index,
  show,
  new: newNotes
};

function index(req, res) {
    console.log('notes index')
    res.render('users/notes');
   }

function show(req, res){
    var id = req.params.id;
    console.log(id)
    User.findOne({"library._id": id}, function(err, user) {
    console.log(user)
     book = user.library.id(id)
      res.render('users/notes', book);
    })}
  
    function newNotes(req, res) {
        console.log('notes newNotes')
       res.render('users/notes');
     }