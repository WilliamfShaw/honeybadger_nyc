'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('tweets', 'user_id', {
      type: Sequelize.INTEGER
    })
  },
  down: (queryInterface, Sequelize) => {
  }
};
