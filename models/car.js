module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      model: DataTypes.STRING,
      manufacturerYear: DataTypes.INTEGER,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {}
  );
  return Cars;
};
