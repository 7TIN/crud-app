const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
mongoose. connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to MongoDB");
            app.listen(port, ()=>{
                console.log(`The Server is running on http://localhost:${port}`);
            });
        })
        .catch((error) =>{
            console.error("Error Connecting to MongoDB", error.message);
        });

app.get('/', (req,res)=>{
    res.send("Welcome!");
})


