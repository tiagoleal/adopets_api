exports.up = function (knex) {
  return knex.schema.createTable('categories', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};
