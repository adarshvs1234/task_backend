const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  image: String,
  startingFrom: Number,
});

module.exports = mongoose.model('Destination', destinationSchema);
