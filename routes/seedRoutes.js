const express = require('express');
const User = require('../models/userModel');
const data = require('../data');

const seedRouter = express.Router();

seedRouter.get('/', async (req,res)=>{
    await User.remove({});
    const createdUsers = await User.insertMany(data.users); 
    res.send({createdProducts, createdUsers});
});

module.exports = seedRouter;
