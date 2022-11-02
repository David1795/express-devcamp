'use strict';

const { Model } = require('mongoose');
const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     

     await queryInterface.addColumn('bootcamps', 'user_id',{
            type: Sequelize.INTEGER,
            references :{ model: 'users',
                          key: 'id'
                        },
                          onUpdate: 'CASCADE',
                          onUpdate: 'SET NULL' 

     })



  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};
