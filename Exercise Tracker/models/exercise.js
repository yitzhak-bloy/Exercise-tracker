const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Exercise', exerciseSchema);