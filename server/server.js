// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { configureCloudinary } = require('./config/cloudinary'); // <-- CORRECTED IMPORT
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Initialize Cloudinary configuration
configureCloudinary(); // <-- CORRECTED FUNCTION CALL

// Middleware
app.use(express.json()); // For parsing application/json bodies
app.use(cors()); // Enable CORS for all routes (consider restricting in production)

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/certificates', require('./routes/certificateRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Basic route for testing server status
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Centralized Error Handling Middleware (should be the last middleware)
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});