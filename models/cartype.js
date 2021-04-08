module.exports =(sequelize, DataTypes) => {
  const CarTypes = sequelize.define(
    "CarTypes",
    {
      categoryname: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );

  CarTypes.associate = models => {
    CarTypes.hasMany(models.Cars, {
      foreignKey: "carTypeId",
      onDelete: "CASCADE"
    });
  };
  return CarTypes;
};
