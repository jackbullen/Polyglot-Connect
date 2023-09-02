const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
