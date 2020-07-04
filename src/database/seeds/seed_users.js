exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries

      return knex('users').insert([
        {
          id: 'f1b20e7c',
          name: 'System',
          email: 'system@adopets.com.br',
          password: `$2a$08$M0LdQugF9eNGw9CEysG16OZ9XNBkfVTdXjeJ1E9jIZ338MhDyF/F6`,
        },
      ]);
    });
};
