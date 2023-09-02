const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, text, matchId } = req.body;

        const match = await Match.findOne({ _id: matchId, $or: [{ user1: sender, user2: receiver }, { user1: receiver, user2: sender }] });

        if (!match) {
            return res.status(404).json({ error: 'Match not found' });
        }

        const message = new Message({ match: matchId, user: sender, text, date: new Date() });

        await message.save();

        res.status(201).json({ message });

    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.getUserMessages = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const userMessages = await Message.find({ $or: [{ sender: userId }, { receiver: userId }], match: matchId });
  
      res.json(userMessages);

    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
