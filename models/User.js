module.exports = function (sequelize, DataType) {
  var user = sequelize.define(
    'user',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataType.STRING
      },
      last_name: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      },
      created: {
        type: DataType.DATE,
        defaultValue: DataType.NOW
      }
    },
    {
      timestamps: false
    }
  )

  return user;
}