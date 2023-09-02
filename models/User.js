const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, minlength: 3 },
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    learning: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
    teaching: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
});

userSchema.methods.verifyPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.passwordHash);
    } catch (error) {
      throw error;
    }
  };

const User = mongoose.model('User', userSchema);

module.exports = User;