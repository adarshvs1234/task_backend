const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model('Package', packageSchema);

