'use strict';

const express = require('express'),
    router = express.Router(),
    locationModel = require('../models/locationModel');

router.get('/', async (req, res) => {
    const locationData = await locationModel.getAll();
    res.json(locationData).status(200);
});

router.post('/', async (req, res) => {
    const { location } = req.body;
    const response = await locationModel.addNewLocation(title, body);
    if (response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;