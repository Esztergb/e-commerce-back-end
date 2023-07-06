// import necessary parts of the sequelize libary
const { Model, DataTypes } = require('sequelize');
// import database connection
const sequelize = require('../config/connection.js');

class Category extends Model {}

//set up colums and rules for category model (given in challange Readme)
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category"
  }
);

module.exports = Category;
