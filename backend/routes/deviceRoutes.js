/**
 * @file deviceRoutes.js
 * @description Routes for device operations
 * @github oaslananka
 */

const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// @route POST /api/devices
// @desc Register a device
// @access Public
router.post('/', deviceController.registerDevice);

// @route GET /api/devices
// @desc Get all devices
// @access Public
router.get('/', deviceController.getDevices);

// @route PUT /api/devices
// @desc Update a device
// @access Public
router.put('/', deviceController.updateDevice);

// @route DELETE /api/devices/:id
// @desc Delete a device
// @access Public
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;
