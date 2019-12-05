var Note = require('../models/notes');

module.exports = {
  index,
  create,
  delete: deleteNote
};

function index(req, res) {
  var msg = "You dont have any notes"
  console.log('index notepad')

  Note.find({}, function(err, notes) {

  res.render('users/notepad', {
    notes,
    time: req.time,
    msg,
    user: req.user
  });
})}


function deleteNote(req, res) {
  Note.findById(req.params.id, function(err, note){
  note.deleteOne(function(err) {
    res.redirect(`/users/notepad/`);
  })
})
}

function create(req, res) {
  console.log('create')
  req.body.done = false;
  Note.create(req.body);
  res.redirect('/users/notepad');
}
