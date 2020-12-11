const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

module.exports = (sequelize, DataTypes) => {
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
            allowNull: true   
        },
        lastName: {
            type:DataTypes.String,
            allowNull: true   
        }
    })
    return User
}