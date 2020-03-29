const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('game', {
    page: 'game',
    title: 'Rocket Game',
    awesomeParagraph: 'coming soon...'
  });
});

module.exports = router;
