var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var librarySchema = new Schema({
  Title: String,
  Author: String,
  Group: {enum: ['favorite', 'toread', 'read']}
})


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  library: [librarySchema]
});

module.exports = mongoose.model('User', userSchema);