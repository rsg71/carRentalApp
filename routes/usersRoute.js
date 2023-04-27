const express = require('express');
const User = require('../models/userModel.js');
const { generateToken } = require('../utils');
const expressAsyncHandler = require('express-async-handler')

const userRouter = express.Router();

userRouter.post('/login', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
})
);

module.exports = userRouter;
