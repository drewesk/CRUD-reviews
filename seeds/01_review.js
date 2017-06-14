const reviews = require('../seed-data/review');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE review RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('review').insert(reviews);
    });
};
