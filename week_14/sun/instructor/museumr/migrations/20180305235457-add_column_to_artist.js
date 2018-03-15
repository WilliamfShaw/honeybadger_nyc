'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'artists',
        'email',
        {
          type: Sequelize.STRING
        }
      )
    ];
  },
  down: (queryInterface, Sequelize) => {
  }
};
