const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    page: 'home',
    title: 'Rocket',
    awesomeParagraph: 'Main page... Click the game link to play'
  });
});

module.exports = router;
