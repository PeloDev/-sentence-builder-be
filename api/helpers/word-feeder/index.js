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

const pluralize = require('pluralize');
const tensify = require('tensify');

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

function pluralizeNouns(wordArr) {
    let newWordArr = wordArr;
    for (let i = 0; i < wordArr.length; i++) {
        try {
            let pluralWord = pluralize(wordArr[i]);
            if (!wordArr.includes(pluralWord))
                newWordArr.push(pluralWord);
        } catch (error) {
            continue;
        }
    }
    return newWordArr.sort();
}

function pastTensifyVerbs(wordArr) {
    let newWordArr = wordArr;
    for (let i = 0; i < wordArr.length; i++) {
        try {
            let pastTenseWord = tensify(wordArr[i]).past;
            if (!wordArr.includes(pastTenseWord))
                newWordArr.push(pastTenseWord);
        } catch (error) {
            continue;
        }
    }
    return newWordArr.sort();
}

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
            words = pluralizeNouns(this.getNouns());
            break;
        case 'verb':
            words = pastTensifyVerbs(this.getVerbs());
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

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

exports.getRandomWordsByType = (wordType, count = 10) => {
    let wordObs = this.getWordsByType(wordType);
    let isValidType = wordObs.message.length < 1;
    let words =  shuffle(wordObs.words).slice(0, count);
    return {
        message: isValidType !== true ? 'Not a valid word type' : '',
        count: words.length,
        wordType: wordType,
        words: words
    };
}