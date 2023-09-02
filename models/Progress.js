const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
    progress: { type: Number, required: true },
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;