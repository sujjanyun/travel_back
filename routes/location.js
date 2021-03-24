'use strict';

const express = require('express'),
    router = express.Router(),
    locationModel = require('../models/locationModel'),
    slugify = require('slugify');

router.get('/', async (req, res) => {
    const locationData = await locationModel.getAll();
    res.json(locationData).status(200);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const location = await locationModel.getBySlug(slug);

    if (location) {
        res.json(location).status(200);
    }
    else {
        res.status(404).send(`No location found that matches slug, ${slug}`);
    }
});

router.post('/', async (req, res) => {
    const { location } = req.body;
    const slug = slugify(location, {
        replacement: '_',
        lower: true,
        strict: true
    });
    console.log('reqBody: ', req.body)
    const response = await locationModel.addNewLocation(location, slug);
    if (response.rowCount >= 1) {
        res.redirect('/');
    } else {
        res.sendStatus(500);
    }
});

router.delete('/:slug', async (req, res) => {
    const { slug } = req.body;
    console.log('reqBody: ', req.body);
    const location = new locationModel(slug);
    const response = await location.deleteLocation();
    if (response.rowCount >= 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;