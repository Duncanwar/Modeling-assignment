/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Cars, { foreignKey: "carId" });
      Orders.belongsTo(models.Users, { foreignKey: "userId" });
      Orders.hasMany(models.OrderStates, { foreignKey: "orderStateId" });
      Orders.hasOne(models.Payments, { foreignKey: "paymentId" });
    }
  }
  Orders.init({
    userId: DataTypes.INTEGER,
    carId: DataTypes.STRING,
    status: DataTypes.ENUM("CREATED", "RECEIVED", "CANCEL")
  }, {
    sequelize,
    modelName: "Orders",
  });
  return Orders;
};
