const express = require('express');
const app = express();
const PORT = process.env.PORT || 3737;

// Set pug as the View Engine
app.set('view engine', 'pug');

// Used instead of body-parser to get the values of our inputs (req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// We set the directory for our static files
app.use(express.static('assets'));

// Routes
app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Listening on port ${PORT}`));
