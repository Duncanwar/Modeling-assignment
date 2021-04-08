  'use strict';
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('OrderStates', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        orderStatus: {
      type: Sequelize.ENUM("RECEIVED", "CREATED", "CANCEL"),
      defaultValue: "CREATED"
      },
      orderId: {
      type: Sequelize.INTEGER,
      references:{model:"Orders",key:"id"}
    },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('OrderStates');
    }
  };