exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', (table) => {
    table.increments();
    table.text('title');
    table.text('body');
    table.integer('rating');
    table.integer('critic_id')
      .unsigned()
      .references('id')
      .inTable('critic')
      .onDelete('cascade');
    table.integer('restaurant_id')
      .unsigned()
      .references('id')
      .inTable('restaurant')
      .onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review');
};
// table.integer('table_name_id').unsigned().references('id').inTable('table_name').onDelete('cascade');
