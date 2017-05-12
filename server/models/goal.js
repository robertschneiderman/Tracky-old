'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define('Goal', {
    taskId: { type: DataTypes.INTEGER, allowNull: false },    
    interval: { type: DataTypes.STRING, allowNull: false },
    multiplier: { type: DataTypes.FLOAT, defaultValue: 1 },
    count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    target: { type: DataTypes.INTEGER, allowNull: false },
    streak: { type: DataTypes.INTEGER, defaultValue: 0 },
    record: { type: DataTypes.INTEGER, defaultValue: 0 }
    // multiplier: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
  }, {
    classMethods: {
      associate: function(models) {    
        Goal.belongsTo(models.Task, {
          foreignKey: 'taskId',
          as: 'task'
        });
      }
    }
  });
  return Goal;
};