const express = require('express');
const app = express();
const PORT = process.env.PORT || 3737;

// Set pug as the View Engine
app.set('view engine', 'pug');

// Routes
app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Listening on port ${PORT}`));
