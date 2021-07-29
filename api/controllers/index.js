const { Word } = require('../models/word');
const { Sentence } = require('../models/sentence');
const wordFeeder = require('../helpers/word-feeder');

exports.search_words = async (req, res) => {
    const { wordType, searchTerm } = req.query;
    result = wordFeeder.getWordsByType(wordType, searchTerm);
    res.json(result);
};

exports.store_sentence = async (req, res) => {
    const sentence = new Sentence({ sentence: req.body.sentence });
    let result = sentence.save();
    res.json(result);
};