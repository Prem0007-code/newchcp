const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const adminAuth = require('../middleware/adminAuth');

// GET /api/submissions - admin-protected - returns all submissions latest first
router.get('/', adminAuth, async (req, res) => {
  try {
    const items = await Submission.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, data: items });
  } catch (err) {
    console.error('Error fetching submissions', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
