const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    date: { type: Date, required: true },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;