import User from '../Models/registerModle.js';  // Ensure this points to the correct User model

// Example login function
export const login = async (req, res) => {
    const { username, password } = req.body;  // Assuming you're sending username and password

    try {
        // Logic for verifying user credentials
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Compare passwords here (using bcrypt for hashing)
        // const isMatch = await bcrypt.compare(password, user.password);
        
        // if (!isMatch) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Export additional functions as needed
