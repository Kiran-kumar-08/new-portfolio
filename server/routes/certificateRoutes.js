// routes/certificateRoutes.js
const express = require('express');
const router = express.Router();
const {
    getCertificates,
    getCertificateById,
    addCertificate,
    updateCertificate,
    deleteCertificate
} = require('../controllers/certificateController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary'); // Import multer-cloudinary setup

router.route('/')
    .get(getCertificates) // Publicly accessible
    .post(protect, upload.single('image'), addCertificate); // Admin only, requires image upload

router.route('/:id')
    .get(getCertificateById) // Publicly accessible
    .put(protect, upload.single('image'), updateCertificate) // Admin only, image optional
    .delete(protect, deleteCertificate); // Admin only

module.exports = router;