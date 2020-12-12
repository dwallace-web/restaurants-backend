const { DataTypes } = require('sequelize')
const database = require('../db')

module.exports = database.define('restaurant', {
    name: {
        type: DataTypes.STRING,
        unique: false,
    },
    address: {
        type: DataTypes.STRING,
        unique: true,
    },
    socialmedia: {
        type: DataTypes.JSONB,
        unique: true,
    }
})

//https://sequelize.org/master/manual/other-data-types.html#json--sqlite--mysql--mariadb-and-postgresql-only-
//JSONB for use any operations on the json value
