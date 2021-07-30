let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Sentence builder back end");
});

router.get('/api/get-word-types', controllers.get_word_types);

router.get('/api/get-words', controllers.search_words);

router.get('/api/get-random-words', controllers.generate_random_words);

router.post('/api/store-sentence', controllers.store_sentence);

router.get('/api/fetch-sentences', controllers.fetch_sentences);

module.exports = router;
