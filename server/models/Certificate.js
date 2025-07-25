// models/Certificate.js
const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    issuingBody: {
        type: String,
        required: true,
        trim: true,
    },
    issueDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    imageUrl: {
        type: String, // URL from Cloudinary
        required: true,
    },
    publicId: { // Cloudinary public ID for easy deletion/management
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;