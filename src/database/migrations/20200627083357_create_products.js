exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable();
    table.string('stock').notNullable();
    table.integer('category_id').notNullable();
    table.foreign('category_id').references('id').inTable('categories');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
