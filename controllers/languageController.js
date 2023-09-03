const Language = require('../models/Language');
const { find } = require('../models/User');

exports.createLanguage = async (req, res) => {
    try {
        const { name } = req.body;
        const language = new Language({ name });
        const savedLanguage = await language.save();
        res.status(201).json(savedLanguage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getLanguage = async (req, res) => {
    try {
        const { languageId } = req.params;
        const language = await Language.findById(languageId);
        console.log(languageId);
        if (!language) {
            return res.status(404).json({ message: 'Language not found' });
        }

        res.status(200).json(language);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
