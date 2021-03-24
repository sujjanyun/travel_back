'use strict';

const express = require('express'),
    router = express.Router(),
    activityModel = require('../models/activityModel');

router.get('/', async (req, res) => {
    const activityData = await activityModel.getAll();
    res.json(activityData).status(200);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const activity = await activityModel.getAllActivity(id);
    if (activity) {
        res.json(activity).status(200);
    } else {
        res.status(404).send(`No activities for id ${id}.`)
    }
});

router.post('/', async (req, res) => {
    const { date, activity_title, activity_body, location_slug } = req.body;
    console.log('OOH HEY ACTIVITY IS POSTING!!!!!!: ', req.body)
    const response = await activityModel.addNewActivity(date, activity_title, activity_body, location_slug);
    console.log('Post activity data', response);
    if (response.rowCount >= 1) {
        res.redirect('/');
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', (req, res) => {
    console.log('Deleting Activity');
});

module.exports = router;