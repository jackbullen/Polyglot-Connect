const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    learners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;