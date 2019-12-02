module.exports = function(sequelize, DataTypes) {
    var product_category = sequelize.define(
      'product_category',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        product_category_name: {
          type: DataTypes.STRING
        }
      });
      product_category.associate = function(models) {
          product_category.belongsTo(models.product_category, { 
            foreignKey: "parent_product_category_id"
          });
       };
      return product_category;
  }