
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        max: 255
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }},{
      freezeTableName: true
  });
  return burgers;
};

