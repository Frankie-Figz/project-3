module.exports = function(sequelize, DataTypes) {
    var orderline = sequelize.define(
        'orderline',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        document_number: {
            type: DataTypes.STRING
        },        
        description: {
            type: DataTypes.STRING
        },
        qty: {
            type: DataTypes.NUMERIC
        },
        line_total: {
            type: DataTypes.NUMERIC
        },
        price: {
            type: DataTypes.NUMERIC
        }
    });

    orderline.associate = function(models){
        orderline.belongsTo(models.order, {
            foreignKey: "order_id"
        });

        orderline.belongsTo(models.product, {
            foreignKey: "product_id"
        });
    };
    return orderline;
};