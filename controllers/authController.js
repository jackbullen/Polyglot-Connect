const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const {username, password, email} = req.body;

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({username, passwordHash, email});

        await user.save();

        const secretKey = 'ABC123'; 
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    
        res.json({ token, userId: user._id });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user || !user.verifyPassword(password)) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        const secretKey = 'ABC123'; 
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

        res.json({ token, userId: user._id });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



