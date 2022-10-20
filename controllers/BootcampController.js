
//todos los bootcamps
exports.getAllBootcamps = (req, res)=>{

    res.status(200).json({
        "success" : true,
        "data" : "todos los bootcamps"
    })

}

//bootcamp por id
exports.getSingleBootcamps = (req, res)=>{
 
    res.status(200).json({
        "success" : true,
        "data" : `aqui se muestra el bootcamp cuyo id ${req.params.id}`
       })

}

//crear bootcamp
exports.createBootcamp = (req, res)=>{

    res.status(201).json({
        "success" : true,
        "data" : "aqui se crearan los bootcamps"
       })
    
}

//actualizar bootcamp
exports.updateBootcamp = (req, res)=>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se actualiza el bootcamp cuyo id ${req.params.id}`
       })

}

//eliminar el bootcamp
exports.deleteBootcamp = (req, res)=>{

    res.status(200).json({
        "success" : true,
        "data" : `aqui se elimina el bootcamp cuyo id ${req.params.id}`
       })  

}
