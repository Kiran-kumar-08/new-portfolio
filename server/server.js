require('dotenv').config({ path: './.env' }); // Ensure .env is loaded from correct path
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Debug: Print loaded ENV variables ---
console.log("✅ Loaded ENV:");
console.log("PORT:", PORT);
console.log("CLIENT_URL:", process.env.CLIENT_URL);
console.log("MONGO_URI:", process.env.MONGO_URI ? "Found" : "Missing");

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ TEMP CORS Setup: Open to all origins for testing
app.use(cors()); // Uncomment during testing
/*
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
*/

// --- Debug: Log all incoming requests
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully!'))
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1); // Exit process with failure
    });

// --- Routes ---
app.get('/', (req, res) => {
    res.status(200).send('🚀 Portfolio Backend API is running!');
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 Access backend at: http://localhost:${PORT}`);
});
