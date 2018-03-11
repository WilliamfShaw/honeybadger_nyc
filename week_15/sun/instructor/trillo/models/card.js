'use strict';
module.exports = (sequelize, DataTypes) => {
  var card = sequelize.define('card', {
    task: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN
  }, {});
  card.associate = function(models) {
    // associations can be defined here
  };
  return card;
};