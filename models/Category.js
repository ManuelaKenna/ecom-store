const { Model, DataTypes } = require('sequelize');
const { DataTypes } = require('sequelize/types/index.js');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id : {
      type: DataTypes.INTEGER, 
      autoIncrement:true, 
      allowNull: false,
      primaryKey:true
    },
  category_name : {
    type: DataTypes.STRING,
    allowNull:false
  }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;