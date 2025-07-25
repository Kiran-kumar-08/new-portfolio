// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const {
    submitContactMessage,
    getContactMessages,
    markMessageAsRead,
    deleteContactMessage
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .post(submitContactMessage) // Publicly accessible
    .get(protect, getContactMessages); // Admin only

router.route('/:id')
    .put(protect, markMessageAsRead) // Admin only
    .delete(protect, deleteContactMessage); // Admin only

module.exports = router;