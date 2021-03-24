'use strict';

const db = require('./conn');

class locationModel {
    constructor(id, location, slug) {
        this.id = id;
        this.location = location;
        this.slug = slug;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM location;`);
        return response;
    }

    static async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM location WHERE slug = '${slug}';`);
        return response;
    }

    static async addNewLocation(location, slug) {
        const response = await db.result(`INSERT INTO location (location, slug) VALUES ($1, $2)`, [location, slug]);
        return response;
    }

    static async deleteLocation() {
        const response = await db.result(`DELETE * FROM location WHERE slug = '${slug}';`);
        return response;
    }
}

module.exports = locationModel;