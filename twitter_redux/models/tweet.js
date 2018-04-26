'use strict';
module.exports = (sequelize, DataTypes) => {
  var tweet = sequelize.define('tweet', {
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  tweet.associate = function(models) {
    // associations can be defined here
  };
  return tweet;
};