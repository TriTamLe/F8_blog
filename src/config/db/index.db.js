const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1/heartmind_blog');
    console.log('Connected to database');
  } catch (error) {
    console.log('Connecting failed!', error);
  }
}

module.exports = { connect };
