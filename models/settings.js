var mongoose = require('mongoose');

var settingsSchema = new mongoose.Schema({
    theme: {type: Boolean},
  });


module.exports = mongoose.model('Settings', settingsSchema);