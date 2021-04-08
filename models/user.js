module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    }, {}
  );

  Users.associate = models => {
    Users.belongsTo(models.Roles, {
      as: "role",
      foreignKey: "roleId"
    });
  };
  return Users;
};
