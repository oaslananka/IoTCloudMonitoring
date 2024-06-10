/**
 * @file Data.js
 * @description Data model for MongoDB
 * @github oaslananka
 */

const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    deviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
        required: true
    },
    data: {
        type: Map,
        of: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Data', DataSchema);
