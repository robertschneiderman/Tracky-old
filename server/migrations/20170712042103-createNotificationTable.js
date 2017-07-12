'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {      
        allowNull: false,
        type: Sequelize.INTEGER
      },      
      icon: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.DATE
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      seen: {
        type: Sequelize.BOOLEAN
      },
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
    return queryInterface.dropTable('Notifications');
  }
};