module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    "Roles",
    {
      roleName: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );

  Roles.associate = models =>{
    Roles.hasMany(models.Users, {
      foreignKey: 'roleId',
      onDelete: 'CASCADE'
    });
  };
  return Roles;
};
