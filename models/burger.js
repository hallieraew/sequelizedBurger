
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("Burger", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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
  return burger;
};

Burger.create({
  burger_name: "Cheese Burger",
  devoured: false
});
Burger.create({
  burger_name: "Hamburger",
  devoured: false
});
Burger.create({
  burger_name: "Pizza Burger",
  devoured: false
});