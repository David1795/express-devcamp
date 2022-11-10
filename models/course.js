'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: {
    type : DataTypes.STRING,  
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Campo Obligatorio" 
      },
      notEmpty:{
        args: true,
        msg: "El campo no debe estar vacio" 
      }, 
    }
    }, 
    description:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Campo Obligatorio" 
      },
      notEmpty:{
        args: true,
        msg: "El campo no debe estar vacio" 
      }, 
    }
     
    },
     
    weeks: {
    type: DataTypes.STRING,
    allowNull: false,
   
    validate: {
      min: 1,
      max: 9,
      notNull: {
        args: true,
        msg: "Campo Obligatorio" 
      },
      notEmpty:{
        args: true,
        msg: "El campo no debe estar vacio" 
      },
      min:{

        args: true,
        msg: "El campo debe de ser de 1 minimo dato" 
      } 
    }
    },

    enroll_cost: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Campo Obligatorio" 
      },
      notEmpty:{
        args: true,
        msg: "El campo no debe estar vacio" 
      }, 
    }
    },
    
    minimum_skill: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Campo Obligatorio" 
      },
      notEmpty:{
        args: true,
        msg: "El campo no debe estar vacio" 
      }, 
    }
    }, 
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Course',
  });
  return Course;
};