'use strict';
module.exports = (sequelize, DataTypes) => {
  var artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
    artist.hasMany(models.painting, { foreignKey: 'artist_id', onDelete: 'CASCADE'})
  };
  return artist;
};
