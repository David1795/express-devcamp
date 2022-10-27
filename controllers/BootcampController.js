
const  sequelize = require('../config/seq')

const {DataTypes} = require('sequelize')

const BootModel = require('../models/bootcamp')

const Boot = BootModel(sequelize, DataTypes)




exports.getAllBootcamps = async (req, res)=>{
    const allBootcamps = await Boot.findAll()
    console.log(allBootcamps)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allBootcamps
        })
}

exports.getSingleBootcamp =  async (req, res)=>{
    const singleBoot = await Boot.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBoot
        })
}

exports.createBootcamp = async (req , res)=>{
    const newBoot = await Boot.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newBoot
        })
}

exports.updateBootcamp = async (req , res)=>{
    await Boot.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    
    const singleBoot = await Boot.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBoot
        })
}

exports.deleteBootcamp = async (req , res)=>{
    const singleBoot = await Boot.findByPk(req.params.id)

    await Boot.destroy({
        where: {
            id: req.params.id
        }
      });

    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBoot
        })
}