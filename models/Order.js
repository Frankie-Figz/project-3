module.exports = function(sequelize, DataTypes) {
    var order = sequelize.define(
        'order',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        document_number: {
            type: DataTypes.STRING
        },
        order_date: {
            type: DataTypes.DATE
        },
        description: {
            type: DataTypes.STRING
        },
        ispaid: {
            type: DataTypes.BOOLEAN
        },
        isinvoiced: {
            type:DataTypes.BOOLEAN
        }
    });

    order.associate = function(models){
        order.belongsTo(models.user, {
            foreignKey: "user_id"
        });
    };
    return order;
};