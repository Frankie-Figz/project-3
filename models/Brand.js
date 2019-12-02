module.exports = function(sequelize, DataTypes) {
    var brand = sequelize.define(
      'brand',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        brand_name: {
          type: DataTypes.STRING
        }
      });
      return brand;
  }