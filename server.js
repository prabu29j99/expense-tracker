const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

const app = express();
app.use(express.json());

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev')); 
}
connectDB();

app.use('/api/v1/transactions', require('./routes/transactions'));

// Listening on Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));