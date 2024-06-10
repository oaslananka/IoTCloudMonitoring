/**
 * @file deviceController.js
 * @description Controller functions for device operations
 * @github oaslananka
 */

const Device = require('../models/Device');

exports.registerDevice = async (req, res) => {
    const { name, type, location } = req.body;

    try {
        const newDevice = new Device({
            name,
            type,
            location
        });

        await newDevice.save();
        res.status(201).json({ msg: 'Device registered successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateDevice = async (req, res) => {
    const { id, status } = req.body;

    try {
        const device = await Device.findById(id);

        if (!device) {
            return res.status(404).json({ msg: 'Device not found' });
        }

        device.status = status;
        device.lastSeen = Date.now();

        await device.save();
        res.status(200).json({ msg: 'Device updated successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteDevice = async (req, res) => {
    const { id } = req.params;

    try {
        await Device.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Device deleted successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
