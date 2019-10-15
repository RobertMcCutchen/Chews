'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    price: DataTypes.STRING,
    stars: DataTypes.STRING,
    category: DataTypes.STRING,
    distance: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User, {as: 'User', foreignKey: 'user_id'})
  };
  return Favorite;
};