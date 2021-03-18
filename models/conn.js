'use strict';

const host = 'queenie.db.elephantsql.com',
    database = 'wkjxgksg',
    user = 'wkjxgksg',
    password = 'qzHb0T7uSO1TBOds2G5oM0UMZghB7Sn9';


const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    },
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;