/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payments.belongsTo(models.Orders, { foreignKey: "orderId" });
    }
  }
  Payments.init({
    orderId: DataTypes.INTEGER,
    status: DataTypes.ENUM("UNPAID", "FULLYPAID")
  }, {
    sequelize,
    modelName: "Payments",
  });
  return Payments;
};
