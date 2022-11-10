'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        notNull: false,
        type: Sequelize.STRING
        
      },
      description: {
        notNull: false,
        type: Sequelize.STRING
      },
      weeks: {
        notNull: false,
        type: Sequelize.STRING
      },
      enroll_cost: {
        notNull: false,
        type: Sequelize.STRING
      },
      minimum_skill: {
        notNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};