const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    value: {
        type: String,
        index: true
    },
    wordType: {
        type: String,
        enum: [
            'noun', 'verb', 'adjective', 
            'adverb', 'pronoun', 'preposition', 
            'conjunction', 'determiner', 'exclamation'
        ],
        index: true
    },
    definition: {
        type: String,
        default: '',
        index: true
    }
});

module.exports = {
    Word: mongoose.model('Word', WordSchema)
}