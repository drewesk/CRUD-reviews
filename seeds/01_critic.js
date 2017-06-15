const critics = require('../seed-data/critics');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE critic RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('critic').insert(critics);
    });
};
