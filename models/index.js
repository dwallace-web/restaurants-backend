const User = require('./user');
const Restaurant = require('./restaurant');
const Comment = require('./comment');

User.hasMany(Restaurant, {as: 'businessowner'});

// Restaurant.hasMany(Comment, {as: 'restaurantcomment'});
// Comment.belongsTo(Restaurant, {as: 'restaurantcomment'});

// User.hasMany(Comment, {as: 'commenter'});

Restaurant.hasMany(Comment)
User.hasMany(Comment)
Comment.belongsTo(User)
Comment.belongsTo(Restaurant)




module.exports = {
    User,
    Restaurant,
    Comment
};