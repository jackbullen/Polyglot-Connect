const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);

    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateUserProfile = async (req, res) => {
    try{
        const userId = req.params.userId;
        const updatedProfileData = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updatedProfileData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);

    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteUserProfile = async (req, res) => {
    try{
        const userId = req.params.userId;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(deletedUser);

    } catch (error) {
        res.status(400).json({ error });
    }
};