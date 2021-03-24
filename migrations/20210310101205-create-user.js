'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        allowNull:false,
        type: Sequelize.INTEGER,
        unique: true,
      },
      version: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      username:{
        allowNull: true,
        unique: true,
        type: Sequelize.STRING
      },
      password:{
        allowNull:true,
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      roleId:{
        allowNull:false,
        type: Sequelize.INTEGER
      },
      isVerified:{
        defaultValue: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};