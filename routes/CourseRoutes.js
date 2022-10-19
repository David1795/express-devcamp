const express = require('express')
const router = express.Router()

//RUTAS COURSES
//CREAR COURSE
router.post('/', (req, res)=>{

    res.status(201).json({
     "success" : true,
     "data" : "aqui se crearan los courses"
    })
 
 });

//LISTAR COURSES
router.get('/', (req, res)=>{

    res.status(200).json({
        "success" : true,
        "data" : "aqui se van a mostrar todos los courses"
    })

})

//LISTAR ID COURSE
router.get('/:id', (req, res)=>{
 
    res.status(200).json({
        "success" : true,
        "data" : `aqui se muestra el course cuyo id ${req.params.id}`
       })

})


//EDITAR COURSE
router.put('/:id' , (req, res) =>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se actualiza el course cuyo id ${req.params.id}`
       })

})

//ELIMINAR COURSE
router.delete('/:id', (req, res) =>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se elimina el course cuyo id ${req.params.id}`
       })  

}) 

module.exports = router