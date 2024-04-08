const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const jwtSecret = "gdfsdfsfgddaettuoghffs";

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/test', (req, res) => {
    res.json('test ok');
});
console.log(process.env.MONGO_URL);

app.post('/rollno', async (req, res) => {
    const { Rollno } = req.body;

    try {
        const userDoc = await User.findOne({ Rollno });
        if (!userDoc) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate JWT token
        const token = jwt.sign({ Rollno: userDoc.Rollno, id: userDoc._id }, jwtSecret);

        // Set the token as a cookie
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' }).json({ message: "Token generated successfully" });
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
