const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




require('dotenv').config();
const app = express()

app.use(cookieParser());


;

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
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' }).json(userDoc);
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});




// Route to fetch user data by Rollno
app.get('/academic/:rollno', async (req, res) => {
    try {
        const rollno = req.params.rollno;

        // Query the database for user data based on Rollno
        const userData = await User.findOne({ Rollno: rollno });
  
        if (!userData) {
            // If user data not found, return 404 Not Found status with an error message
            return res.status(404).json({ message: "User not found" });
        }

        // If user data found, send it as a JSON response
        res.json(userData);
    } catch (error) {
        // If an error occurs, return 500 Internal Server Error status with an error message
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
});


app.get('/coactivity/:rollno',async (req,res) => {
    try {
        const rollno = req.params.rollno;
        const userData = await User.findOne({Rollno : rollno});
        if(!userData) {
            return res.status(404).json({message :"User not found"});
        }
        res.json(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
