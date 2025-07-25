// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser); // Secure this route heavily or remove after initial admin setup
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;