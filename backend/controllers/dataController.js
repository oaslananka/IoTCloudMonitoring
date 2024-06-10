/**
 * @file dataController.js
 * @description Controller functions for data operations
 * @github oaslananka
 */

const Data = require('../models/Data');

exports.addData = async (req, res) => {
    const { deviceId, data } = req.body;

    try {
        const newData = new Data({
            deviceId,
            data
        });

        await newData.save();
        res.status(201).json({ msg: 'Data added successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await Data.find({ deviceId: req.params.deviceId });
        res.status(200).json(data);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
