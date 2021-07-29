const Word = require('../models/word');
const Sentence = require('../models/sentence');

exports.search_words = (req, res) => {
    const { wordType, searchTerm } = req.query;
    let findObj = {
        wordType:  wordType
    };
    if (searchTerm) {
        findObj = { ...findObj, value: {"$regex":  searchTerm, "$options": "i"}}
    }
    const words = await Word.find(findObj);

    res.json(words);
};

exports.store_sentence = (req, res) => {
    const sentence = new Sentence({ sentence: req.body.sentence });
    let result = sentence.save();
    res.json(result);
};