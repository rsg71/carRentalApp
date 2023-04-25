const express = require('express');
const port = process.env.PORT || 5000 ;
const dbConnection = require('./db');
const userRouter  = require('./routes/usersRoute');

const app = express();
app.use(express.json());


app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users',userRouter);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});

app.get('/',(req,res)=>res.send('Hello World!'))
app.listen(port, ()=> console.log(`Node.js server started in port ${port}`))