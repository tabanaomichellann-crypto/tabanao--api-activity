//server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true}));


// Load Config
const PORT =process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

const apiRoutes = require('./src/routes/apiRoutes');
app.use(process.env.BASE_URI, apiRoutes);

const authRoutes = require ('./src/routes/authRoutes');
app.use (BASE_URI, authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`process.env.Base_URI: http://localhost:${PORT}${BASE_URI}`);

});
