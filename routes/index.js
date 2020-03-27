const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Rocket',
    awesomeParagraph: "The place where it's at"
  });
});

module.exports = router;
