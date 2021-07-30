const { Word } = require('../models/word');
const { Sentence } = require('../models/sentence');
const wordFeeder = require('../helpers/word-feeder');
const wordTypes = require('../data/word-types');

exports.get_word_types = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.json(wordTypes);
};

exports.search_words = async (req, res) => {
    const { wordType, searchTerm } = req.query;
    result = wordFeeder.getWordsByType(wordType, searchTerm);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(result);
};


exports.generate_random_words = async (req, res) => {
    const { wordType, count } = req.query;
    result = wordFeeder.getRandomWordsByType(wordType, count);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(result);
};

exports.store_sentence = async (req, res) => {
    const sentence = new Sentence(JSON.parse(req.body.body));
    let result = await sentence.save();
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/json");
    res.json(result);
};

exports.fetch_sentences = async (req, res) => {
    let result = await Sentence.find({}); // fetch all for now, since test user will have access to their own mongodb instance
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.json(result);
};
