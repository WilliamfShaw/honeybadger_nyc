'use strict';
module.exports = (sequelize, DataTypes) => {
  var house = sequelize.define('house', {
    name: DataTypes.STRING,
    sigil: DataTypes.STRING,
    region: DataTypes.STRING
  }, {});
  house.associate = function(models) {
    // associations can be defined here
  };
  return house;
};