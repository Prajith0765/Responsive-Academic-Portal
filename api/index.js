const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({
    credentials : true,
    origin: 'http://localhost:5173',
}));
app.get('/test', (req,res) =>{
    res.json('test ok');
});

app.post('/rollno', (req,res) =>{
    const{Rollno} = req.body;
    res.json({Rollno});
});

app.listen(5000);