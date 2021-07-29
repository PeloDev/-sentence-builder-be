const { Word } = require('../models/word');
const { Sentence } = require('../models/sentence');
const wordFeeder = require('../helpers/word-feeder');

exports.search_words = async (req, res) => {
    const { wordType, searchTerm } = req.query;
    // let findObj = {
    //     wordType:  wordType
    // };
    // if (searchTerm) {
    //     findObj = { ...findObj, value: {"$regex":  searchTerm, "$options": "i"}}
    // }
    // const words = await Word.find(findObj);
    result = wordFeeder.getDeterminers();
    res.json({count: result.length, result: result});
};

exports.store_sentence = async (req, res) => {
    const sentence = new Sentence({ sentence: req.body.sentence });
    let result = sentence.save();
    res.json(result);
};