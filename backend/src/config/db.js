const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.CLOUD_URI;
  mongoose.set('strictQuery', true);

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
