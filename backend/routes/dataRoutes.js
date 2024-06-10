/**
 * @file dataRoutes.js
 * @description Routes for data operations
 * @github oaslananka
 */

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// @route POST /api/data
// @desc Add data
// @access Public
router.post('/', dataController.addData);

// @route GET /api/data/:deviceId
// @desc Get data for a device
// @access Public
router.get('/:deviceId', dataController.getData);

module.exports = router;
