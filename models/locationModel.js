'use strict';

const db = require('./conn');

class locationsModel {
    constructor(id, city, country) {
        this.id = id;
        this.city = city;
        this.country = country;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM location;`);
        return response;
    }

    static async addNewLocation(city, country) {
        const response = await db.result(`INSERT INTO location (city, country) VALUES ($1, $2)`, [city, country]);
        return response;
    }
}

module.exports = locationsModel;