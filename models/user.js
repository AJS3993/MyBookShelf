var mongoose = require('mongoose');


var librarySchema = new mongoose.Schema({
  Title: {
    type: String
  },
  Author: {
    type: String
  },
  Group: {
    type: String,
    enum: ['Favorite', 'To Read', 'Read']
  }
})


var userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  googleId: {type: String},
  library: [librarySchema]
});

module.exports = mongoose.model('User', userSchema);