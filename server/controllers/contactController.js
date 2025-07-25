// controllers/contactController.js
const asyncHandler = require('../middleware/authMiddleware').asyncHandler;
const ContactMessage = require('../models/ContactMessage');
const sendEmail = require('../utils/emailSender'); // Utility to send emails

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
const submitContactMessage = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        res.status(400);
        throw new Error('Please fill in all fields.');
    }

    const newMessage = await ContactMessage.create({
        name,
        email,
        subject,
        message,
    });

    if (newMessage) {
        // Send email notification to your designated email address
        const emailContent = `
            <h3>New Contact Message</h3>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <br>
            <small>Received on: ${new Date().toLocaleString()}</small>
        `;

        try {
            await sendEmail(process.env.CONTACT_EMAIL_RECEIVER, `New Portfolio Contact: ${subject}`, emailContent);
            res.status(201).json({ message: 'Message sent successfully!' });
        } catch (emailError) {
            console.error('Error sending contact email:', emailError);
            // Even if email fails, we save the message to DB, but inform user
            res.status(201).json({ message: 'Message received, but email notification failed. We will get back to you soon.' });
        }
    } else {
        res.status(400);
        throw new Error('Failed to save message.');
    }
});

// @desc    Get all contact messages (Admin only)
// @route   GET /api/contact
// @access  Private (Admin)
const getContactMessages = asyncHandler(async (req, res) => {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
});

// @desc    Mark a contact message as read (Admin only)
// @route   PUT /api/contact/:id/read
// @access  Private (Admin)
const markMessageAsRead = asyncHandler(async (req, res) => {
    const message = await ContactMessage.findById(req.params.id);

    if (!message) {
        res.status(404);
        throw new Error('Message not found');
    }

    message.isRead = true;
    const updatedMessage = await message.save();
    res.status(200).json(updatedMessage);
});

// @desc    Delete a contact message (Admin only)
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
const deleteContactMessage = asyncHandler(async (req, res) => {
    const message = await ContactMessage.findById(req.params.id);

    if (!message) {
        res.status(404);
        throw new Error('Message not found');
    }

    await message.deleteOne();
    res.status(200).json({ message: 'Message deleted', id: req.params.id });
});

module.exports = {
    submitContactMessage,
    getContactMessages,
    markMessageAsRead,
    deleteContactMessage,
};