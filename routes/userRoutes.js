const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile/:userId', userController.getUserProfile);
router.put('/profile/:userId', userController.updateUserProfile);
router.delete('/profile/:userId', userController.deleteUserProfile);

module.exports = router;
