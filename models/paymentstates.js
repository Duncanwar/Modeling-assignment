'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentStates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    PaymentStates.belongsTo(models.Payments, { foreignKey: "paymentId" })
    }
  };
  PaymentStates.init({
    paymentId: DataTypes.INTEGER,
    paymentStatus: DataTypes.ENUM("UNPAID", "FULLYPAID"),
    actionBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentStates',
  });
  return PaymentStates;
};