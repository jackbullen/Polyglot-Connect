const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    token: { type: String, required: true },
    date: { type: Date },
    duration: { type: Number },
    platform: { type: String },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

