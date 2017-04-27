'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taskId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      interval: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      target: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },     
      week: {
        type: Sequelize.INTEGER
      }, 
      day: {
        type: Sequelize.INTEGER
      },       
      streak: {
        type: Sequelize.INTEGER,
        default: 0
      },
      // multiplier: {
      //   type: Sequelize.FLOAT        
      // },          
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Goals');
  }
};