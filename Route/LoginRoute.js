import express from 'express';
import { login } from '../Controllers/logincontroller.js';  // Ensure the correct import

const router = express.Router();

// Define your login route
router.post('/login', login);  // Adjust route as necessary

// Export the router
export default router;
