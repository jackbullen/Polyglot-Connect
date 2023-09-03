const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.post('/', languageController.createLanguage);
router.get('/:languageId', languageController.getLanguage);
// router.post('/:languageId/resources', languageController.createResource);
// router.get('/:languageId/resources', languageController.getResources);

module.exports = router;
