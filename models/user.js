'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    firstName: {
      allowNull: false,
      type:DataTypes.STRING,
    },
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    profilePicture: {
      type:Seq
    }
    version: true,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};