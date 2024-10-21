const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/Education", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve the login page at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html")); // Adjust the path as necessary
});

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  usn: String,     // Student USN
  teacherId: String, // Teacher ID
  password: String,
});

// Create user model
const User = mongoose.model("User", userSchema);

// Student login route
app.post("/api/student-login", async (req, res) => {
  const { username, usn, password } = req.body;  // Extract data from the request

  try {
    // Find user in the MongoDB collection matching username, usn, and password
    const user = await User.findOne({ username, usn, password });
    
    if (user) {
      return res.status(200).json({ message: "Login successful" });  // Login successful
    } else {
      return res.status(401).json({ message: "Invalid credentials" });  // Invalid login credentials
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });  // Server error
  }
});

// Teacher login route
app.post("/api/teacher-login", async (req, res) => {
  const { teacherId, password } = req.body;

  try {
    const user = await User.findOne({ teacherId, password }); // Look up teacher by ID and password
    if (user) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid teacher credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
