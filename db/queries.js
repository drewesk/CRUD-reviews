const knex = require('./knex');

module.exports = {
  getAll: () => {
   return knex("critic");
 },
 getOne: (id) => {
   return knex("critic").where('id', id).first();
 },
 getResourcesByCritics: (id) => {
   return knex("review")
    .join('critic', 'review.critic_id', '=', 'critic.id')
    .where('critic.id', id);
 },
 // getResourcesByRestaurants: (id) => {
 //   return knex("review");
 //
 // },
 create: (review) => {
   return knex("review").insert(trail);
 }
}
