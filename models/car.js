module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      model: DataTypes.STRING,
      manufacturerYear: DataTypes.INTEGER,
      carTypeId: DataTypes.INTEGER,
    },
    {}
  );

  Cars.associate = models => {
    Cars.belongsTo(models.CarTypes, {
      as: "CarType",
      foreignKey: "carTypeId"
    });
  };
  return Cars;
};
