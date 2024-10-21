const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    usn: { // USN instead of email
        type: String,
        required: true,
        unique: true, // Ensure USNs are unique
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

// Pre-save middleware to hash password
userSchema.pre('save', async function (next) {
    // Only run this if the password was modified
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12); // Hash the password
    next();
});

// Method to check if the provided password matches the stored password
userSchema.methods.correctPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password); // Compare passwords
};

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the model
