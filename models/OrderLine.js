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
        }
    });

    orderline.associate = function(models){
        orderline.belongsTo(models.order, {
            foreignKey: "order_id"
        });
    };
    return orderline;
};