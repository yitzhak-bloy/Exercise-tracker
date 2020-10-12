const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  user: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);