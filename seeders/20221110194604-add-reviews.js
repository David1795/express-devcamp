'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{ 
      title: 'Javascript',
      text: 'Un buen curso',
      rating: '10',
      user_id: '1',
      bootcamp_id: '1'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
