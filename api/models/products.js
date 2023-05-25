'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.STRING,
    url: DataTypes.STRING,
    weight: DataTypes.STRING,
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    length: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};