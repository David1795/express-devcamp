
const  sequelize = require('../config/seq')

const {DataTypes, ValidationError} = require('sequelize')

const CourModel = require('../models/course')

const Cour = CourModel(sequelize, DataTypes)




exports.getAllCourses = async (req, res)=>{

try {

    const allCourses = await Cour.findAll()
    console.log(allCourses)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allCourses
 
        })
    
} 

catch (error) {
    
    res.status(400).json({
        "success": false,
        "errors": "Error de servidor"
    })


}
   
 
}        

exports.getSingleCourse =  async (req, res)=>{

    try {

        const singleCour = await Cour.findByPk(req.params.id)

        if(!singleCour){

            res.status(400).json({
                "success": false,
                "errors": "Curso no encontrado"
            })
        
        }    
         
        else {

            res 
            .status(200)
            .json({
                "success" : true,
                "data": singleCour
        })

        }     


        }


        
    catch (error) {

        res.status(400).json({
            "success": false,
            "errors": "Error de servidor"
        })
        
    }
   
    
}

exports.createCourse = async (req , res)=>{

    try {
        const newCour = await Cour.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newCour
        })
    } 
    catch (error) {
        
        if(error instanceof ValidationError){

            const msg_errores = error.errors.map(errorItem =>errorItem.message )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }

        else{

            res.status(400).json({
                "success": false,
                "errors": "Error de servidor"
            })
           
        }

    }
    
}

exports.updateCourse = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleCour = await Cour.findByPk(req.params.id)
        //Si no xiste
        if(!singleCour){
            res.status(400).json({
                "success":false,
                "errors": "Course no encontrado"
            })
        }else{
            //Si existe, actualizo course
            await Cour.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const updateCourse = await Cour.findByPk(req.params.id)
            //response con usuario actualizado
            res 
            .status(200)
            .json({
                "success" : true,
                "data": updateCourse
            })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": error
        })
    }
}

exports.deleteCourse = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleCour = await Cour.findByPk(req.params.id)
        //Si no xiste
        if(!singleCour){
            res.status(400).json({
                "success":false,
                "errors": "Course no encontrado"
            })
        }else{
            //Si existe, actualizo course
            await Cour.destroy( {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const deleteCourse = await Cour.findByPk(req.params.id)
            //response con usuario actualizado
            res 
                .status(200)
                .json({
                    "success" : true,
                    "data": deleteCourse
                })
            }
        } catch (error) {
            res.status(400).json({
                "success":false,
                "error": "Error de servidor"
            })
        }
}