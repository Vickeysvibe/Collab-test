// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();  // Connect to MongoDB

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the RS256 Auth Project!');
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found.' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
