// controllers/certificateController.js
const asyncHandler = require('../middleware/authMiddleware').asyncHandler;
const Certificate = require('../models/Certificate');
const cloudinary = require('cloudinary').v2;

// @desc    Get all certificates
// @route   GET /api/certificates
// @access  Public
const getCertificates = asyncHandler(async (req, res) => {
    const certificates = await Certificate.find().sort({ issueDate: -1 }); // Sort by newest first
    res.status(200).json(certificates);
});

// @desc    Get single certificate
// @route   GET /api/certificates/:id
// @access  Public
const getCertificateById = asyncHandler(async (req, res) => {
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
        res.status(404);
        throw new Error('Certificate not found');
    }
    res.status(200).json(certificate);
});

// @desc    Add a new certificate
// @route   POST /api/certificates
// @access  Private (Admin)
const addCertificate = asyncHandler(async (req, res) => {
    const { title, issuingBody, issueDate, description } = req.body;
    const imageUrl = req.file ? req.file.path : null; // Cloudinary URL
    const publicId = req.file ? req.file.filename : null; // Cloudinary public ID

    if (!title || !issuingBody || !issueDate || !imageUrl || !publicId) {
        res.status(400);
        // If image was uploaded but other fields are missing, delete it from Cloudinary
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
        throw new Error('Please include all required fields and an image.');
    }

    const certificate = await Certificate.create({
        title,
        issuingBody,
        issueDate,
        description,
        imageUrl,
        publicId,
    });

    res.status(201).json(certificate);
});

// @desc    Update a certificate
// @route   PUT /api/certificates/:id
// @access  Private (Admin)
const updateCertificate = asyncHandler(async (req, res) => {
    const { title, issuingBody, issueDate, description } = req.body;
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
        res.status(404);
        throw new Error('Certificate not found');
    }

    // Handle new image upload if exists
    let imageUrl = certificate.imageUrl;
    let publicId = certificate.publicId;

    if (req.file) {
        // Delete old image from Cloudinary
        if (certificate.publicId) {
            await cloudinary.uploader.destroy(certificate.publicId);
        }
        imageUrl = req.file.path;
        publicId = req.file.filename;
    }

    certificate.title = title || certificate.title;
    certificate.issuingBody = issuingBody || certificate.issuingBody;
    certificate.issueDate = issueDate || certificate.issueDate;
    certificate.description = description || certificate.description;
    certificate.imageUrl = imageUrl;
    certificate.publicId = publicId;

    const updatedCertificate = await certificate.save();
    res.status(200).json(updatedCertificate);
});

// @desc    Delete a certificate
// @route   DELETE /api/certificates/:id
// @access  Private (Admin)
const deleteCertificate = asyncHandler(async (req, res) => {
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
        res.status(404);
        throw new Error('Certificate not found');
    }

    // Delete image from Cloudinary
    if (certificate.publicId) {
        await cloudinary.uploader.destroy(certificate.publicId);
    }

    await certificate.deleteOne();
    res.status(200).json({ message: 'Certificate removed', id: req.params.id });
});

module.exports = {
    getCertificates,
    getCertificateById,
    addCertificate,
    updateCertificate,
    deleteCertificate,
};