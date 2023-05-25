'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cep: DataTypes.STRING,
    nuCasa: DataTypes.STRING,
    complemento: DataTypes.STRING,
    senha: DataTypes.STRING,
    pedidos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};