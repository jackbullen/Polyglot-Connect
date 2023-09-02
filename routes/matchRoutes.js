const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/send-request', matchController.sendMatchRequest);
router.post('/accept-request', matchController.acceptMatchRequest);

module.exports = router;