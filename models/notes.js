var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema([{
    body  : String,
    date  : Date
}]);

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, body) {
    notes.splice(id, 1, body);
  }
  
  function deleteOne(id) {
    notes.splice(id, 1);
  }
  
  function create(body) {
    notes.push(body);
  }
  
  function getOne(id) {
    return notes[id];
  }
  
  function getAll() {
    return notes;
  }



module.exports = mongoose.model('Note', noteSchema);