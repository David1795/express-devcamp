// 1. crear dependencia express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv');
const { application, Router } = require('express');
const listEndpoints = require('express-list-endpoints');

//definitions
dotenv.config({
    path: './config/config.env'
})


// 2. crear objeto  application con express
const app = express();

app.get('/', (request, response)=>{
    response.send('ruta funcional')

})

// dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')

//relacionar rutas de dominios
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', courseRoutes)



//consultar rutas
console.log(listEndpoints(app))

app.listen(process.env.PORT ,  ()=> {
    console.log('servidor activo'.bgGreen)
})