var User = require('../models/user');

module.exports = {
  index,
  show,
  new: newNotes,
  update,
  edit
};

function index(req, res) {
    console.log('notes index')
    res.render('users/notes', {user: req.user});
   }

   function show(req, res){
  //   var id = book.id;
  // console.log(id)
  // User.findOne({"library._id": id}, function(err, user) {
  // console.log(user)
  //  book = user.library.id(id)
   /** res.render takes three arguments
    * @param { String } 1 : is the file path to the view to be rendered!!
    * @param { Object } 2 : is local variables that the view needs to render!!!
    * @param { Function } 3 : callback function "this is rare"
    */ 
    res.render('users/notes', {user: req.user});  // the actual path is /Users/andrewsmith/code/MyBookShelf/views/users/notes
  }
  

    function newNotes(req, res) {
        console.log('notes newNotes')
       res.render('users/notes/new');
     }


     function update(req, res) {
      
      let id = book.id;
      User.findOne({"library._id": id}, function(err, user) {
        let bookArr = user.library;
        bookArr.forEach((library, idx) => {
          if(library._id == id) {
            req.body._id = id;
      
            user.library[idx]._id = id,
            user.library[idx].note.push(req.body)
            

            user.library[idx].note.forEach(function(obj){
              obj.noteinfo.push(obj.note);
              console.log(obj.note)

            user.save().then(
      res.redirect('/users/notes/update')
        )})}})})}
     

      function edit(req, res) {
        console.log('notes edit')
        res.render('notes/edit', {
          idx: req.params.id
        });
      }