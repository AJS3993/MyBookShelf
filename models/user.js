var mongoose = require('mongoose');


var notesSchema = new mongoose.Schema({
  note: {type: String},
  noteinfo: {type: Array}
})

var librarySchema = new mongoose.Schema({
  Title: {
    type: String,
    default: 'Untitled'
  },
  Author: {
    type: String,
    default: 'Unknown'
  },
  Group: {
    type: String,
    enum: ['Favorite', 'To Read', 'Read']
  },
  Rating: {
    type: String
  },
  note: [notesSchema]
  })



var userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  googleId: {type: String},
  library: [librarySchema]
});




module.exports = mongoose.model('User', userSchema);