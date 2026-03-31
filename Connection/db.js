const mongoose = require('mongoose')

const databaseURL = process.env.databaseURL

mongoose.connect(databaseURL).then(res => {
    console.log("Bookstore server successfully connected to MongoDb");   
}).catch((error) => {
    console.log("Connection failed");
    console.log(error);
})