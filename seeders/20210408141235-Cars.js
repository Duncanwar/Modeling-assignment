'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cars", [{
      model:"FERRARI",
      manufacturerYear:"Normal user accessing personal information",
      carTypeId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
  return  queryInterface.bulkDelete("Cars",null,{})
  }
};
