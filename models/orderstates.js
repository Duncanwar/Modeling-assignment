const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderStates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderStates.belongsTo(models.Orders,{ foreignKey:"orderId"})
    }
  }
  OrderStates.init({
    orderStatus: DataTypes.ENUM("RECEIVED", "CREATED", "CANCEL"),
    orderId: DataTypes.INTEGER,
    actionBy:DataTypes.STRING,
  }, {
    sequelize,
    modelName: "OrderStates",
  });
  return OrderStates;
};
