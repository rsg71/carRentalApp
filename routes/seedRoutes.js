import express from 'express'
import User from '../models/userModel';
import data from '../data'

const seedRouter = express.Router();

seedRouter.get('/', async (req,res)=>{
    await User.remove({});
    const createdUsers = await User.insertMany(data.users); 
    res.send({createdProducts, createdUsers});
});

export default seedRouter;