const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.post('/schedule', sessionController.scheduleSession);
router.post('/sessions', sessionController.getSessions);

module.exports = router;