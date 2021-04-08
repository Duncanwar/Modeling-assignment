'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [{
      roleName:"CLIENT",
      description:"Normal user accessing personal information",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
    roleName:"ADMIN",
    description:"He controlls the whole system",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    roleName:"SELLER",
    description:"HE SELLS CARS",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  }
};
