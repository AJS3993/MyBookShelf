var mongoose = require('mongoose');

var settingsSchema = new mongoose.Schema({
    sortby: {type: Boolean},
  });


module.exports = mongoose.model('Settings', settingsSchema);