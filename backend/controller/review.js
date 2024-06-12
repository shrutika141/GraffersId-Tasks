const { Review } = require("../models/index");

module.exports = {
  addReview: (req, res) => {
    const data = {
      company_id: req.body.company_id,
      full_name: req.body.full_name,
      subject: req.body.subject,
      review_text: req.body.review_text,
      rating: req.body.rating,
    };

    Review.create(data)
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

  getReview: (req, res) => {
    Review.findAll({
       where:{ company_id: req.params.id }
    })
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
