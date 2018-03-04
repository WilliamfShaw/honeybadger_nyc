'use strict';
module.exports = (sequelize, DataTypes) => {
  var human = sequelize.define('human', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    status: DataTypes.STRING,
    portrait: DataTypes.STRING
  }, {});
  human.associate = function(models) {
    // associations can be defined here
  };
  return human;
};