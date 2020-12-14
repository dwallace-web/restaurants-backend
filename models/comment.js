const { DataTypes } = require('sequelize')
const database = require('../db')

module.exports = database.define('comment', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    }
})

//https://sequelize.org/master/manual/other-data-types.html#json--sqlite--mysql--mariadb-and-postgresql-only-
//JSONB for use any operations on the json value
