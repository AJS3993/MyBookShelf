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
    res.render('users/notes');
   }

   function show(req, res){
    var id = req.params.id;
  // console.log(id)
  User.findOne({"library._id": id}, function(err, user) {
  console.log(user)
   book = user.library.id(id)
   /** res.render takes three arguments
    * @param { String } 1 : is the file path to the view to be rendered!!
    * @param { Object } 2 : is local variables that the view needs to render!!!
    * @param { Function } 3 : callback function "this is rare"
    */ 
    res.render('users/notes', book);  // the actual path is /Users/andrewsmith/code/MyBookShelf/views/users/notes
  })}
  

    function newNotes(req, res) {
        console.log('notes newNotes')
       res.render('users/notes/new');
     }


     function update(req, res) {
      
      req.user.library.push(req.body);
      req.user.save().then(function(err) {
          res.redirect(`/users/notes`);
        })
      }

      function edit(req, res) {
        console.log('notes edit')
        res.render('todos/edit', {
          idx: req.params.id
        });
      }