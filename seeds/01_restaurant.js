const restaurants = require('../seed-data/restaurant');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE restaurant RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('restaurant').insert(restaurants);
    });
};
