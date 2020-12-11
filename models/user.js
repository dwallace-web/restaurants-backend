const { Sequelize, DataTypes, Model } = require('sequelize/types');
const db = require('../db');

module.exports = () => {
    const User = db.define('user', {
        email:{
            type:DataTypes.String,
            allowNull: false   
        },
        password: {
            type:DataTypes.String,
            allowNull: false   
        },
        firstName: {
            type:DataTypes.String,
            allowNull: false   
        },
        lastName: {
            type:DataTypes.String,
            allowNull: false   
        }
    })

    return User
}