'use strict';

const db = require('./conn');

class locationModel {
    constructor(id, location) {
        this.id = id;
        this.location = location;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM location;`);
        return response;
    }

    static async addNewLocation(location) {
        const response = await db.result(`INSERT INTO location (location) VALUES ($1)`, [location]);
        return response;
    }
}

module.exports = locationModel;