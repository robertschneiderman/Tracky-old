const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const config = require('../environment');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    userId: { type: DataTypes.INTEGER, allowNull: false },      
    icon: { type: DataTypes.STRING, allowNull: false },
    completed: { type: DataTypes.BOOLEAN, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    seen: { type: DataTypes.BOOLEAN, allowNull: false },
  }, {
    classMethods: {
      associate: function(models) {                 
      },  
    },
    instanceMethods: {
    }
  });
  return Notification;
};