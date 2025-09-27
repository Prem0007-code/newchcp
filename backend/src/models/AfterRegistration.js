const { Schema, model } = require('mongoose');

const AfterRegistrationSchema = new Schema(
  {
    teamName: { type: String, required: true, trim: true },
    playerName1: { type: String, required: true, trim: true },
    playerName2: { type: String, trim: true },
    playerName3: { type: String, required: true, trim: true },

    emailPlayer1: { type: String, required: true, trim: true, lowercase: true },
    emailPlayer2: { type: String, required: true, trim: true, lowercase: true },
    emailPlayer3: { type: String, required: true, trim: true, lowercase: true },

    tshirtSize1: { type: String, enum: ['S', 'M', 'L'], required: true },
    tshirtSize2: { type: String, enum: ['S', 'M', 'L'], required: true },
    tshirtSize3: { type: String, enum: ['S', 'M', 'L'], required: true },

    // Optional Codeforces handles
    codeforceid1: { type: String, trim: true },
    codeforceid2: { type: String, trim: true },
    codeforceid3: { type: String, trim: true },

    // Optional base64-encoded payment screenshot (small images only)
    paymentScreenshotBase64: { type: String },
  },
  { timestamps: true }
);

module.exports = model('AfterRegistration', AfterRegistrationSchema);
