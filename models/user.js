const { DataTypes, Model } = require('sequelize');
const database = require('../db');

module.exports = (sequelize, DataTypes) => {
    return  database.define('user', {
        email:{
            type: DataTypes.String,
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
}

// further research 
//https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz 
