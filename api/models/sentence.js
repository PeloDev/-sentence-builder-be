const mongoose = require('mongoose');
const Word = require('./word');

const SentenceSchema = new mongoose.Schema({
    sentence: {
        type: [ Word ],
        index: true
    }
})

let Sentence = mongoose.model('Sentence', SentenceSchema);

module.exports = {
    Sentence: Sentence
}