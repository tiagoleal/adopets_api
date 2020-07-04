exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { title: 'Limpeza' },
        { title: 'Alimentação' },
        { title: 'Embutidos' },
        { title: 'Destilados' },
        { title: 'Bebidas Alcoólicas' },
        { title: 'Laticinios' },
        { title: 'Bebidas não Alcoólicas' },
      ]);
    });
};
