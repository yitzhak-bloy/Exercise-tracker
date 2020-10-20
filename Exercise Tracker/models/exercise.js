const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Exercise', exerciseSchema);