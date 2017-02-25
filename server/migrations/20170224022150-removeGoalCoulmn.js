'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Goals', 'goal');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Goals',
      'goal',
      Sequelize.INTEGER
    );    
  }
};
