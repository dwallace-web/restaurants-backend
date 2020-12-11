const { Sequelize, DataTypes, Model } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
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