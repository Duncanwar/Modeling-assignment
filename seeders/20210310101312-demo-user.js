'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      firstName: "John",
      lastName: "Doe",
      phoneNumber: 78989439,
      version: 0,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
