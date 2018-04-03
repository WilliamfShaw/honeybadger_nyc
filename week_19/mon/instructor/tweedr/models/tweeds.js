'use strict';
module.exports = (sequelize, DataTypes) => {
  var tweeds = sequelize.define('tweeds', {
    content: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});
  tweeds.associate = function(models) {
    // associations can be defined here
  };
  return tweeds;
};