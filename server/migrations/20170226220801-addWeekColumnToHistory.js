'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Histories',
      'week',
      Sequelize.INTEGER
    );    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Histories', 'week');
  }
};

