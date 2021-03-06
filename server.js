const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path: './config/config.env'})

// Connect to database
connectDB();

//Routes files for
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mounter routers
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler);

const PORT  = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.brightMagenta.bold))

// handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red );
    //Close server & and exit process
    server.close(() => process.exit(1));
})