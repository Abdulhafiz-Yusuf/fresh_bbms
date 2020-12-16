const config = require('../config.json');

const Pool = require("pg").Pool;

const db = new Pool({
    user: config.USER,
    password: config.PASSWORD,
    host: config.HOST,
    port: config.PORT,
    database: config.DATABASE
});

module.exports = db;