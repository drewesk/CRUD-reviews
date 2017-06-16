const knex = require('./knex');

module.exports = {
  getAll(tableName) {
    return knex(tableName);
  },
  // getOne(tableName, id) {
  //   return knex(tableName).where('id', id).first();
  // }
}
