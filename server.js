require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

const PORT = process.env. PORT || 5000;

app.use(express.json());

// MongoDB connection

mongoose.connect(process.env.MONGO_URI) .then(() => console.log("âœ... MongoDB Connected...")) .catch((err) => console.error("DŒ MongoDB connection failed:", err.message));

// Routes

app.use('/api/auth', authRoutes);

// Test route

app.get('/', (req, res) => {

}); res.send('Server and MongoDB are working fine!');

app.listen(PORT, () => {

}); console.log('ðŸš€ Server running on port ${PORT}');