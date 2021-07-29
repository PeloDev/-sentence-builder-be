const { nouns } = require('nouns');
const verbs = require('verb-corpus');
const adjectives = require('adjectives');
const adverbs = require('wordnet-adverbarray');
const pronouns = require('pronouns').table;
const prepositions = require('prepositions');
const conjunctions = require('@rijk/conjunctions');
const determiners = require('../../data/determiners');
const interjections = require('../../data/interjections');
const { uniqueValues } = require('../helper-functions');

exports.getNouns = () => {
    return nouns;
};

exports.getVerbs = () => {
    return verbs;
};

exports.getAdjectives = () => {
    return adjectives;
};

exports.getAdverbs = () => {
    return adverbs;
};

exports.getPronouns = () => {
    return [
        "I",
        "my",
        "mine",
        "myself",
        "you",
        "your",
        "yours",
        "yourself",
        ...pronouns.flat()
    ];
};

exports.getPrepositions = () => {
    return prepositions;
};

exports.getConjunctions = () => {
    return conjunctions;
};

exports.getDeterminers = () => {
    return determiners;
};

exports.getInterjections = () => {
    return interjections;
};

exports.getWordsByType = (wordType, searchTerm = "") => {
    let words = [];
    let isValidType = true;
    if (!wordType) {
        return {
            message: 'Not a valid word type',
            count: words.length,
            wordType: wordType ?? 'undefined',
            words: words
        }
    }
    switch (wordType.toLowerCase()) {
        case 'noun':
            words = this.getNouns();
            break;
        case 'verb':
            words = this.getVerbs();
            break;
        case 'adjective':
            words = this.getAdjectives();
            break;
        case 'adverb':
            words = this.getAdverbs();
            break;
        case 'pronoun':
            words = this.getPronouns();
            break;
        case 'preposition':
            words = this.getPrepositions();
            break;
        case 'conjunction':
            words = this.getConjunctions();
            break;
        case 'determiner':
            words = this.getDeterminers();
            break;
        case 'exclamation':
        case 'interjection':
            words = this.getInterjections();
            break;
        default:
            isValidType = false;
    }

    words = words
        .filter((word) => word.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(uniqueValues)
        .map((word) => word.replace("_", " "));

    return {
        message: isValidType !== true ? 'Not a valid word type' : '',
        count: words.length,
        wordType: wordType,
        words: words
    };
}