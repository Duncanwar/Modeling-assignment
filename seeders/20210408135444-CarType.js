'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CarTypes", [{
      categoryname:"SPORT CAR",
      description:"it has 2 seats for people",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
    categoryname:"TRUCK",
    description:"It has loadcapacity of lifting 5 tones",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CarTypes", null, {});
  }
};
