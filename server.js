const LoginController = require('./Controllers/LoginController');  // Ensure this points to the correct LoginController
const express = require('express');
const mongoose = require('mongoose'); // Corrected import for mongoose
const dotenv = require('dotenv');

dotenv.config({ path: './vars/.env' });

const LoginRouter = require('./routes/LoginRoute'); // Updated to point to the LoginRoute
const app = express();

// Middleware for parsing URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Make sure this is enabled to handle JSON requests

// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/Education', { // Connect to local MongoDB
        useNewUrlParser: true, // Add options for connection
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Set up the login route
app.use('/App', LoginRouter);

// Serve static files from the Public directory
app.use(express.static('./Public'));

// Start server
const PORT = process.env.PORT || 3000; // Ensure PORT is defined
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
