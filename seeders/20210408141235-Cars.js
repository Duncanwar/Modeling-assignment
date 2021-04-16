'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cars", [{
      model:"FERRARI",
      manufacturerYear:"2020",
      type:"SPORT CAR",
      description:"it has 2 seats for people",
      price: 6000000.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
  return  queryInterface.bulkDelete("Cars",null,{})
  }
};
