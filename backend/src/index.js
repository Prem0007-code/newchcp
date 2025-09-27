const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = require('./config/db');
const afterRegistrationsRouter = require('./routes/afterRegistrations');
const submissionsRouter = require('./routes/submissions');

const app = express();

// Middleware
app.use(cors({ origin: '*', methods: ['GET','POST'], allowedHeaders: ['Content-Type', 'x-admin-token'] }));
app.use(morgan('dev'));
app.use(express.json());

// Health check


// Routes
app.use('/api/after-registrations', afterRegistrationsRouter);
app.use('/api/submissions', submissionsRouter);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
