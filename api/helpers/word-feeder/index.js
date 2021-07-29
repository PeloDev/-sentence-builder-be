const { nouns } = require('nouns');
const verbs = require('verb-corpus');
const adjectives = require('adjectives');
const adverbs = require('wordnet-adverbarray');
const pronouns = require('pronouns').table;
const prepositions = require('prepositions');
const conjunctions = require('@rijk/conjunctions');
const determiners = require('../../data/determiners'); 
const interjections = require('../../data/interjections');

exports.getNouns = (searchTerm = "") => {
    return nouns;
};

exports.getVerbs = (searchTerm = "") => {
    return verbs;
};

exports.getAdjectives = (searchTerm = "") => {
    return adjectives;
};

exports.getAdverbs = (searchTerm = "") => {
    return adverbs;
};

exports.getPronouns = (searchTerm = "") => {
    return pronouns;
};

exports.getPrepositions = (searchTerm = "") => {
    return prepositions;
};

exports.getConjunctions = (searchTerm = "") => {
    return conjunctions;
};

exports.getDeterminers = (searchTerm = "") => {
    return determiners;
};

exports.getInterjections = (searchTerm = "") => {
    return interjections;
};