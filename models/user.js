var mongoose = require('mongoose');


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
  note: {type: String
  }
  })



var userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  googleId: {type: String},
  library: [librarySchema]
});


module.exports = mongoose.model('User', userSchema);