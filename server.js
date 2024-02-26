// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// dotenv configuration
dotenv.config()

// reset app object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/portfolio', require('./routes/portfolioRoute'));

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
