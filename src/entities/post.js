const Sequelize = require('sequelize');
const sequelize = require('./../config/db');
const Comment = require("./comment");

class Post extends Sequelize.Model {}

Post.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  tags: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  }

}, { sequelize, modelName: 'post' });


Post.hasMany(Comment, {
  foreignKey: 'postid'
});
Comment.belongsTo(Post);


module.exports = Post;