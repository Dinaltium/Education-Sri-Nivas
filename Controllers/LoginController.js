const User = require('../Models/registerModle'); // Import the User model
const AppError = require('../Utils/appError'); // Ensure AppError is defined

exports.login = async (req, res, next) => {
    const { usn, password } = req.body; // Change email to usn
    if (!usn || !password) {
        return next(new AppError('Please provide a USN and password', 400));
    }

    // Find user by USN
    const user = await User.findOne({ usn: usn }).select('+password');

    // Check if user exists and password matches
    if (!user || !(await user.correctPassword(password))) {
        return next(new AppError('The USN or password is incorrect', 400));
    }

    res.status(200).json({
        status: 'success',
        message: 'You are logged in',
    });
};
