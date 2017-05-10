
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'devDate',
      Sequelize.DATE
    );    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'devDate');
  }
};