'use strict';
module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define('History', {
    userId: { type: DataTypes.INTEGER, allowNull: false },    
    day: { type: DataTypes.INTEGER, allowNull: false },    
    week: { type: DataTypes.INTEGER, allowNull: false },    
    year: { type: DataTypes.INTEGER, allowNull: false },    
    date: { type: DataTypes.DATE, allowNull: false }
  }, {
    classMethods: {
      associate: function(models) {
        History.hasMany(models.Task, {
          foreignKey: 'historyId',
          as: 'tasks'
        });        
        History.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user'
        });
        // associations can be defined here
      }
    }
  });
  return History;
};