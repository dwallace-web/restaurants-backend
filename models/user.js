const { DataTypes } = require('sequelize');
const database = require('../db');

const User = database.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;

// further research 
//https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz 
//https://www.geeksforgeeks.org/express-js-app-render-function/
