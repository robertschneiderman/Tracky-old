'use strict';
module.exports = function(sequelize, DataTypes) {
  var Timestamp = sequelize.define('Timestamp', {
    taskId: { type: DataTypes.INTEGER, allowNull: false },    
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {  
        Timestamp.belongsTo(models.Task, {
          foreignKey: 'taskId',
          as: 'task'
        });
      }
    }
  });
  return Timestamp;
};