'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentStates extends Model {
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