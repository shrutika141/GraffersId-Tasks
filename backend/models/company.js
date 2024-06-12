'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Review, { foreignKey: 'company_id' });
    }
  }
  Company.init({
    company_name: DataTypes.STRING,
    location: DataTypes.STRING,
    founded_on: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};