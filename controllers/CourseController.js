
const  sequelize = require('../config/seq')

const {DataTypes} = require('sequelize')

const CourModel = require('../models/course')

const Cour = CourModel(sequelize, DataTypes)




exports.getAllCourses = async (req, res)=>{
    const allCourses = await Cour.findAll()
    console.log(allCourses)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allCourses
 
        })
 
}        

exports.getSingleCourse =  async (req, res)=>{
    const singleCour = await Cour.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleCour
        })
}

exports.createCourse = async (req , res)=>{
    const newCour = await Cour.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newCour
        })
}

exports.updateCourse = async (req , res)=>{
    await Cour.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    
    const singleCour = await Cour.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleCour
        })
}

exports.deleteCourse = async (req , res)=>{
    const singleCour = await Cour.findByPk(req.params.id)

    await Cour.destroy({
        where: {
            id: req.params.id
        }
      });

    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleCour
        })
}