import express from 'express';  // Import express
import mongoose from 'mongoose';  // Import mongoose
import dotenv from 'dotenv';  // Import dotenv for environment variables
const LoginRouter = require('./routes/LoginRoute'); // Ensure this matches the actual file name


dotenv.config({ path: './vars/.env' });  // Load environment variables

const app = express();  // Create an express app

// Middleware for parsing URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // Make sure this is enabled to handle JSON requests

// Connect to MongoDB
mongoose
    .connect(process.env.LINK, {
        useNewUrlParser: true,  // Add options for connection
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Set up the login route
app.use('/App', LoginRouter);

// Serve static files from the Public directory
app.use(express.static('./Public'));

// Start server
const PORT = process.env.PORT || 3000;  // Ensure PORT is defined
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
