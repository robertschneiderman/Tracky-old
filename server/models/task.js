'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    icon: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    taskOrder: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    classMethods: {
      associate: function(models) {
        Task.hasMany(models.Goal, {
          foreignKey: 'taskId',
          as: 'goals'
        });   
        Task.hasMany(models.Timestamp, {
          foreignKey: 'taskId',
          as: 'timestamps'
        });                
        Task.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user'
        });
      }
    }
  });
  return Task;
};