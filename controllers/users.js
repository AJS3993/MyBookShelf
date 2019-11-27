

module.exports = {
  index,
  new: newBook,
  create
};

function index(req, res) {
  res.render('users/index', {user: req.user});
 }
 
 function newBook(req, res) {
  res.render('users/new');
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var book = new Book(req.body);
  book.save(function(err) {
    if (err) return res.render('users/new');
    console.log(book);
    res.redirect('/users');
  });
}
