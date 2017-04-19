module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Tasks',
      'taskOrder',
      Sequelize.INTEGER
    );    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Tasks', 'taskOrder');
  }
};