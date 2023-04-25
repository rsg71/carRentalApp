const mongoose = require('mongoose');

function connectDB() {

    mongoose.connect('mongodb+srv://carRentApp:Nk9712194368@carrental.y2ytey2.mongodb.net/carRentalApp',
    {useUnifiedTopology: true, useNewUrlParser: true});

    const connection = mongoose.connection;

    connection.on('connected', ()=>{
        console.log('MongoDB Connection Successfull');
    });

    connection.on('error', ()=>{
        console.log('MongoDB Connection Error');
    })

}

connectDB();

module.exports = mongoose;