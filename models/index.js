const User = require('./user');
const Restaurant = require('./restaurant');
const Comment = require('./comment');

User.hasMany(Restaurant, {as: 'businessowner'});

// Restaurant.hasMany(Comment, {as: 'restaurantcomment'});
// User.hasMany(Comment, {as: 'commenter'});


module.exports = {
    User,
    Restaurant
};