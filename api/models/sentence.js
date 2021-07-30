let mongoose = require('mongoose');

let SentenceSchema = new mongoose.Schema({
    sentence: {
        type: [ Object ],
        index: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
})

module.exports = {
    Sentence: mongoose.model('Sentence', SentenceSchema)
}