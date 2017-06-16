const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

// function isValidId(req, res, next) {
//   if(!isNaN(req.params.id)) return next();
//   next(new Error('invalid ID'));
// }

// function validReview(review) {
//
// }

router.get('/', (req, res) => {
    queries.getAll('review').then(items => {
      res.json(items);
    });
});

module.exports = router;
