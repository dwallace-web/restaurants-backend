const User = require('./user');
const Restaurant = require('./restaurant');

User.hasMany(Restaurant, {as: 'businessowner'});

module.exports = {
    User,
    Restaurant
};