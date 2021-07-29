let express = require('express');
let router = express.Router();
let controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Sentence builder back end");
});

router.get('/api/get-words', controllers.search_words);

router.post('/api/store-sentence', controllers.store_sentence);

module.exports = router;
