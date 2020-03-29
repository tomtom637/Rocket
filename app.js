const express = require('express');
const app = express();
const http = require('http').Server(app);

// Set pug as the View Engine
app.set('view engine', 'pug');

// Used instead of body-parser to get the values of our inputs (req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// We set the directory for our static files
app.use(express.static('assets'));

// Routes - referencing the routes folder
app.use('/', require('./routes/index'));
app.use('/game', require('./routes/game'));

const server = http.listen(process.env.PORT || 3737, () => {
  console.log('server is running on port', server.address().port);
});
