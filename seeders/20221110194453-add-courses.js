'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      title: 'Javascript',
      description: 'course completo',
      weeks: '5',
      enroll_cost: '5000',
      minimum_skill: 'Basic',
      bootcamp_id: '1'
    },
    {
      title: 'Javascript',
      description: 'course completo',
      weeks: '5',
      enroll_cost: '5000',
      minimum_skill: 'Basic',
      bootcamp_id: '2'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
  
};
