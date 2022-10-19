const express = require('express')
const router = express.Router()

//RUTAS BOOTCAMPS
//CREAR BOOTCAMP
router.post('/', (req, res)=>{

    res.status(201).json({
     "success" : true,
     "data" : "aqui se crearan los bootcamps"
    })
 
 });

//LISTAR BOOTCAMPS
router.get('/', (req, res)=>{

    res.status(200).json({
        "success" : true,
        "data" : "aqui se van a mostrar todos los bootcamps"
    })

})

//LISTAR ID BOOTCAMP
router.get('/:id', (req, res)=>{
 
    res.status(200).json({
        "success" : true,
        "data" : `aqui se muestra el bootcamp cuyo id ${req.params.id}`
       })

})


//EDITAR BOOTCAMP
router.put('/:id' , (req, res) =>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se actualiza el bootcamp cuyo id ${req.params.id}`
       })

})

//ELIMINAR BOOTCAMP
router.delete('/:id', (req, res) =>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se elimina el bootcamp cuyo id ${req.params.id}`
       })  

}) 

module.exports = router