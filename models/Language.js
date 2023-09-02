const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
