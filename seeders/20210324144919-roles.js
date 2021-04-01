'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [{
      roleName:"normal",
      description:"Normal user accessing personal information",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
    roleName:"Admin",
    description:"He controlls the whole system",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
