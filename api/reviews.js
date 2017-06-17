const queries = require('../db/queries');
const express = require('express');
const router = express.Router();

// function isValidId(req, res, next) {
//   if(!isNaN(req.params.id)) return next();
//   next(new Error('invalid ID'));
// }

// function validReview(review) {
//
// }

router.get('/', (req, res) => {
    queries.getAll('review')
      .then(items => {
      res.json(items);
    });
});

router.get('/:id', (req, res) => {
  queries.getOne(req.params.id)
    .then(item => {
    res.json(item);
  })
});

router.get('/:id/resource/', (req, res) => {
  queries.getResourcesByCritics(req.params.id)
    .then((resource) => {
      res.json(resource);
  });
});

router.post('/:id/resource/', (req, res) => {
  queries.create(req.body)
    .then((reviews) => {
      res.json(reviews[0]);
  });
});

module.exports = router;
