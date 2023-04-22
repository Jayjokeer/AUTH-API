const express= require('express')
require('dotenv').config()
const mongoose= require('mongoose')

const app= express()
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//database
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get('/',(req,res)=>{
    res.send('app connecttttttttt')
})
//apis
app.use('/',require('./routes/register'))
app.use('/', require('./routes/login'))



app.listen(process.env.PORT,()=>{
    console.log('app running')
})



