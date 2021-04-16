'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users", key:"id"}
      },
      carId: {
        type: Sequelize.INTEGER,
        references: {model: "Cars", key:"id"}
      },
      status: {
        type: Sequelize.ENUM("CREATED", "RECEIVED", "CANCEL"),
        defaultValue: "CREATED"
      },
      amount: {
        type: Sequelize.DOUBLE,
         allowNull: false,
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
    await queryInterface.dropTable('Orders');
  }
};