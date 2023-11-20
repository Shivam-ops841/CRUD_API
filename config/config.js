// Importing mongoose
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Scrapi', {}).then(()=>{
    console.log("connected succesfully");
}).catch(error=>console.log(error))


