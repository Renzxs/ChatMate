// IMPORTS
const express = require("express"); // WEB FRAMEWORK
const mongoose = require("mongoose"); // LIBRARY FOR MONGODB
const dotenv = require('dotenv'); // LOAD ENVIRONMENT VARIABLES
const jwt = require('jsonwebtoken'); // JSON Web Token generation and verification
const cors = require('cors'); // For handling Cross-Origin Resource Sharing.

// MODELS
const User = require('./models/User'); // A Model the Interacts with the use collection


// ALLOW US TO STORE AND ACCESS VARIABLE FROM THE ENV FILE
dotenv.config(); 

// CONNECT OUR API URL TO THE DATABASE
mongoose.connect(process.env.MONGO_URL);

// Retrieves the JSON Web Token secret from the environment variable JWT_SECRET and assigns it to the variable jwtSecret.
const jwtSecret = process.env.JWT_SECRET;


const app = express(); 
app.use(express.json());

// CROSS ORIGIN RESOURCES SHARING
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))

// FOR TESTING
app.get("/test", (req, res) => {
    res.json("TEST OKAY!");
});

// REGISTER API
app.post('/register', async (req, res) => {
    const {username, password} = req.body; // GET USERNAME AND PASSWORD FROM THE REQUEST BODY
    try {
        const createdUser = await User.create({username, password});
        
        jwt.sign({userId:createdUser._id}, jwtSecret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).status(201).json({
                _id: createdUser._id,
            }); 
        });
    
    } catch(err){
        if (err) throw err;
        res.status(500).json("ERROR");
    }
});

app.listen(5000);
