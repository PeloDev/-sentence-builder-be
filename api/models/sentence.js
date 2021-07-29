let mongoose = require('mongoose');

let SentenceSchema = new mongoose.Schema({
    sentence: {
        type: [ Object ],
        index: true
    }
})

module.exports = {
    Sentence: mongoose.model('Sentence', SentenceSchema)
}