'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Tasks',
      'icon',
      Sequelize.STRING
    );    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Tasks', 'icon');
  }
};

