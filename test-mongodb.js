// Quick MongoDB Connection Test
require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB connection...');
console.log('Connection string:', process.env.MONGODB_URI?.replace(/:[^:@]+@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('Database:', mongoose.connection.name);
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:');
    console.error('Error:', error.message);
    console.error('\nPossible solutions:');
    console.error('1. Check if your IP is whitelisted in MongoDB Atlas');
    console.error('2. Verify your username and password are correct');
    console.error('3. Ensure your cluster is running');
    process.exit(1);
  });
