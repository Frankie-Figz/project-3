module.exports = function(sequelize, DataTypes) {
  var product = sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.NUMERIC
      },
      url: {
        type:DataTypes.STRING
      },
      description:{
        type:DataTypes.TEXT
      }
    });

    product.associate = function(models) {
        product.belongsTo(models.product_category, { 
          foreignKey: "product_category_id"
        });

        product.belongsTo(models.brand, { 
          foreignKey: "brand_id"
        });
     };

    return product;
}