const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'juris_planner'
});

// Function to establish MySQL connection
const connectDB = () => {
    db.connect((err) => {
        if (err) {
            console.error('❌ Database connection failed:', err.message);
            setTimeout(connectDB, 5000); // 🔄 Retry connection after 5 seconds
        } else {
            console.log('✅ Connected to MySQL Database');
        }
    });

    db.on('error', (err) => {
        console.error('⚠️ Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('🔄 Reconnecting to the database...');
            connectDB();
        } else {
            throw err;
        }
    });
};

connectDB(); // Call function to connect

module.exports = db;
