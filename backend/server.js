/**
 * @file server.js
 * @description Main server file for the IoT Cloud Monitoring application
 * @github oaslananka
 */

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/devices', require('./routes/deviceRoutes'));
app.use('/api/data', require('./routes/dataRoutes'));

app.get('/', (req, res) => {
    res.send('IoT Cloud Monitoring API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
