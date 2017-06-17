exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', (table) => {
    table.increments('id').primary();
    table.text('name');
    table.text('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurant');
};
