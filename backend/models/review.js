'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Company, { foreignKey: 'company_id' });
    }
  }
  Review.init({
    company_id: DataTypes.STRING,
    full_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    review_text: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};