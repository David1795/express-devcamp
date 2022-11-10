'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Javascript',
      description: 'Curso de 4 meses de 0 a experto',
      website: 'sena.edu',
      phone: '3173023448',
      average_rating: '400',
      average_cost: '4000',
      user_id: '1'

    },
    {
      name: 'PHP Code',
      description: 'Curso de 4 meses de 0 a experto',
      website: 'sena.edu',
      phone: '3173023448',
      average_rating: '400',
      average_cost: '4000',
      user_id: '2'
    }
  ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
  
};
