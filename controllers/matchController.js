const Match = require('../models/Match');

exports.sendMatchRequest = async (req, res) => {
    try {
        const { user1, user2, language } = req.body;

        const match = new Match({ user1, user2, language, status: 'pending' });

        await match.save();

        res.status(201).json({ match });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.acceptMatchRequest = async (req, res) => {
    try {
        const { user1, user2, language } = req.body;

        const match = await Match.findOneAndUpdate(
            { user1, user2, language, status: 'pending' },
            { status: 'accepted' },
            { new: true }
        );

        if (!match) {
            return res.status(404).json({ error: 'Match not found' });
        }

        res.json({ match });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.rejectMatchRequest = async (req, res) => {
    try {
        const userId = req.user.id;

        const userMatches = await Match.find({ $or: [{ user1: userId }, { user2: userId }] });

        res.json(userMatches);
    } catch (error) {
        res.status(400).json({ error });
    }
};