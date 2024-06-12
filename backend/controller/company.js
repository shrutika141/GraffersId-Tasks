const { Op } = require("sequelize");
const { Company, Review } = require("../models/index");

module.exports = {
  addCompany: (req, res) => {
    const data = {
      company_name: req.body.company_name,
      location: req.body.location,
      founded_on: req.body.founded_on,
      city: req.body.city,
    };
    Company.create(data)
      .then((result) => {
        res.send({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).send({
          status: 500,
          message: 'Internal server error',
        });
      });
  },

  getCompany: (req, res) => {
    const { location, sort } = req.query;
    const filterOptions = {
      include: Review
    };
  
    if (location) {
      filterOptions.where = { location: { [Op.like]: `%${location}%` } };
    }

    Company.findAll(filterOptions)
      .then((result) => {
        res.send({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).send({
          status: 500,
          message: 'Internal server error',
        });
      });
  },
  
};
