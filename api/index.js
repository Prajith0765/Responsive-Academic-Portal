const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.js');
require('dotenv').config();

const app = express();

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
    const {Rollno} = req.body;
    const userDoc = await User.findOne({Rollno})
    if(userDoc){
        res.json("Found");
    } else{
        res.json("Not Found");
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
