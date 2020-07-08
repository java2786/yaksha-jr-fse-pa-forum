const Sequelize = require('sequelize');
const sequelize = require('./../config/db');

class Comment extends Sequelize.Model {}

Comment.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tags: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING(200),
    allowNull: false
  }

}, { sequelize, modelName: 'comment' });


module.exports = Comment;