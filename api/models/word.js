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
})

let Word = mongoose.model('Word', WordSchema);

module.exports = {
    Word: Word
}