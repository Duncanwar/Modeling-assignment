'use strict';

module.exports =  {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      email:"client@gmai.com",
      fullName:"duncan",
      password:"1212",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email:"admin@gmai.com",
      fullName:"duncan",
      password:"1212",
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email:"seller@gmai.com",
      fullName:"duncan",
      password:"1212",
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
