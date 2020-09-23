const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

require('./database');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api', require('./routes/routes'));


app.listen(3000, () => {
    console.log('Server on port ', 3000);
});