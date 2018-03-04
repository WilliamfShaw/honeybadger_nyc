'use strict';
module.exports = (sequelize, DataTypes) => {
  var weapon = sequelize.define('weapon', {
    name: DataTypes.STRING,
    material: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER
  }, {});
  weapon.associate = function(models) {
    // associations can be defined here
  };
  return weapon;
};