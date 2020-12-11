const Sequelize = require('sequelize');

const database = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})


module.exports = database;