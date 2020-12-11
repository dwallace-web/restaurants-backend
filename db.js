const Sequelize = require('sequelize');

const database = new Sequelize(process.env.NAME, 'postgres', process.env.pass, {
    host: 'localhost',
    dialect: 'postgres'
})

database.authenticate()
    .then(() => console.log('CONFIRMATION - DATABASE CONNECTED'))
    .catch(err => console.log(err));

module.exports = database;