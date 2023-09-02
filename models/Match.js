const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    status: { type: String, required: true },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;