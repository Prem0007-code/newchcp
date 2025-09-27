const express = require('express');
const router = express.Router();
const AfterRegistration = require('../models/AfterRegistration');
const adminAuth = require('../middleware/adminAuth');

// POST /api/after-registrations
router.post('/', async (req, res) => {
  try {
    const {
      teamName,
      playerName1,
      playerName2,
      playerName3,
      emailPlayer1,
      emailPlayer2,
      emailPlayer3,
      tshirtSize1,
      tshirtSize2,
      tshirtSize3,
      codeforceid1,
      codeforceid2,
      codeforceid3,
      paymentScreenshotBase64,
    } = req.body || {};

    if (!teamName || !playerName1 || !playerName3 || !emailPlayer1 || !emailPlayer2 || !emailPlayer3 || !tshirtSize1 || !tshirtSize2 || !tshirtSize3) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const doc = await AfterRegistration.create({
      teamName,
      playerName1,
      playerName2,
      playerName3,
      emailPlayer1,
      emailPlayer2,
      emailPlayer3,
      tshirtSize1,
      tshirtSize2,
      tshirtSize3,
      codeforceid1,
      codeforceid2,
      codeforceid3,
      paymentScreenshotBase64,
    });

    return res.status(201).json({ success: true, data: { id: doc._id } });
  } catch (err) {
    console.error('Error creating after-registration doc', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/after-registrations - admin-only: list latest first
router.get('/', adminAuth, async (req, res) => {
  try {
    const items = await AfterRegistration.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, data: items });
  } catch (err) {
    console.error('Error listing after-registrations', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

