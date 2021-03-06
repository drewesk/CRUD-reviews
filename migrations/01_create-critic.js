exports.up = function(knex, Promise) {
  return knex.schema.createTable('critic', (table) => {
    table.increments('id')
      .unsigned()
      .primary();
    table.text('name');
    table.text('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('critic');
};
