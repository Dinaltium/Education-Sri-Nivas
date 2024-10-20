// app.js
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your database name

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Your data models and logic go here
