const generateUniqueId = require('../../app/utils/generateUniqueId');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: generateUniqueId(),
          name: 'Detergente',
          description: 'Lava-louça',
          price: '5,00',
          category_id: 1,
          stock: 12,
        },
        {
          id: generateUniqueId(),
          name: 'Desengordurante',
          description: 'Limpeza de fogões e pias',
          price: '8,00',
          category_id: 1,
          stock: 2,
        },
        {
          id: generateUniqueId(),
          name: 'Desinfetante',
          description: 'Limpeza banheiro',
          price: '12,00',
          category_id: 1,
          stock: 5,
        },
        {
          id: generateUniqueId(),
          name: 'Limpa-vidros',
          description: 'Veja',
          price: '5,00',
          category_id: 1,
          stock: 1,
        },
        {
          id: generateUniqueId(),
          name: 'Sabão',
          description: 'Brilhante',
          price: '5,00',
          category_id: 1,
          stock: 8,
        },
        {
          id: generateUniqueId(),
          name: 'Amaciante',
          description: 'Girando sol',
          price: '5,00',
          category_id: 1,
          stock: 3,
        },
        {
          id: generateUniqueId(),
          name: 'Sabão em pó',
          description: 'Sabão em pó OMO',
          price: '25,00',
          category_id: 1,
          stock: 4,
        },

        {
          id: generateUniqueId(),
          name: 'Açúcar',
          description: 'Açúcar maskavo',
          price: '15,00',
          category_id: 2,
          stock: 2,
        },
        {
          id: generateUniqueId(),
          name: 'Arroz',
          description: 'Tio João',
          price: '10,30',
          category_id: 2,
          stock: 4,
        },
        {
          id: generateUniqueId(),
          name: 'Café',
          description: 'Caboclo',
          price: '5,60',
          category_id: 2,
          stock: 5,
        },
        {
          id: generateUniqueId(),
          name: 'Macarrão',
          description: 'Lava-louça',
          price: '4,30',
          category_id: 2,
          stock: 3,
        },
        {
          id: generateUniqueId(),
          name: 'Ovos',
          description: 'Ovos vermelhos',
          price: '5,00',
          category_id: 2,
          stock: 24,
        },
        {
          id: generateUniqueId(),
          name: 'Iogurte',
          description: 'Batavo',
          price: '6,40',
          category_id: 2,
          stock: 2,
        },
        {
          id: generateUniqueId(),
          name: 'Manteiga',
          description: 'Doriana',
          price: '10,50',
          category_id: 2,
          stock: 8,
        },
        {
          id: generateUniqueId(),
          name: 'Geleias',
          description: 'Geleia Pia',
          price: '5,50',
          category_id: 2,
          stock: 4,
        },
        {
          id: generateUniqueId(),
          name: 'Bolacha doce',
          description: 'Bolacha maria',
          price: '7,50',
          category_id: 2,
          stock: 5,
        },
        {
          id: generateUniqueId(),
          name: 'Bolacha Salgada;',
          description: 'Agua e sal',
          price: '3,50',
          category_id: 2,
          stock: 6,
        },

        {
          id: generateUniqueId(),
          name: 'Papel higiênico',
          description: 'Fofinho',
          price: '12,00',
          category_id: 3,
          stock: 24,
        },
        {
          id: generateUniqueId(),
          name: 'Creme dental',
          description: 'Closeup',
          price: '6,00',
          category_id: 3,
          stock: 3,
        },
        {
          id: generateUniqueId(),
          name: 'Shampoo',
          description: 'Seda',
          price: '20,00',
          category_id: 3,
          stock: 6,
        },
        {
          id: generateUniqueId(),
          name: 'Sabonete',
          description: 'Rexona',
          price: '3,00',
          category_id: 3,
          stock: 6,
        },
        {
          id: generateUniqueId(),
          name: 'Desodorante',
          description: 'Rexona',
          price: '14,50',
          category_id: 3,
          stock: 5,
        },
      ]);
    });
};
