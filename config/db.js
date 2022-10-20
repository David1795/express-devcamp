const mongoose = require('mongoose')
const url ='mongodb: '

//componente 
const connectDB = async () => {
   const conn = await mongoose.connect(url , {
    useUnifieldTopology: true,
    useNewUriParser: true
   })
   console.log(conn.connection.host)

}
connectDB()