const Session = require('../models/Session');
const User = require('../models/User');

exports.scheduleSession = async (req, res) => {
    try {
        const { participants, language, date, duration, platform } = req.body;

        const session = new Session({ participants, language, date, duration, platform });

        await session.save();

        res.status(201).json({ session });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getSessions = async (req, res) => {
    try {
        const userId = req.user.id;

        const userSessions = await Session.find({ participants: userId });

        res.json(userSessions);
    } catch (error) {
        res.status(500).json({ error });
    }
};
