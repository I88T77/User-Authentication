const mongoose = require('mongoose');
const express = require('express');
const DB = require('./src/config/dbconfig')
const userRoutes = require('./src/router/user2.router')

const cors = require('cors');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/api/users',userRoutes);

app.use(notFound) 
app.use(errorHandler)


mongoose.connect(DB.connection_url,{ useNewurlParser: true }).then(()=>{
    console.log('connection successfull');
}).catch((err)=> console.log(err));


const port = process.env.PORT || 4000

app.listen(port,()=> console.log(`listening on localhost: ${port}`))




// npm i
