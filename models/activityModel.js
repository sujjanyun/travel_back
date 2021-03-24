'use strict';

const db = require('./conn');

class activityModel {
    constructor(id, date, activity_title, activity_body, location_slug) {
        this.id = id;
        this.date = date;
        this.activity_title = activity_title;
        this.activity_body = activity_body;
        this.location_slug = location_slug;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM activity`);
        return response;
    }

    static async getAllActivity(id) {
        const response = await db.any(`SELECT * FROM activity WHERE id = ${id}`);
        return response;
    }

    static async addNewActivity(date, activity_title, activity_body, location_slug) {
        const response = await db.result(`INSERT INTO activity (date, activity_title, activity_body, location_slug) VALUES ($1, $2, $3, $4)`, [date, activity_title, activity_body, location_slug]);
        return response;
    }
}

module.exports = activityModel;