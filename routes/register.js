const express= require('express')
const router = require('express').Router()
const db = require('../models/userDB')
const registerUser=require('../controllers/registerController')
const multer = require('multer')
const fileDB = require('../models/fileDB')


router.get('/user/register',(req,res)=>{
    res.send('register')
})

router.post('/user/register',registerUser,(req,res)=>{
    res.send('user created')
})

const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({
    storage:Storage
}).single('testImage')
 
router.post('/user/upload',async(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            const newImage = new fileDB()
                newImage.name= req.body.name,
                newImage.image={
                    data: req.file.filename,
                    contentType:'image/png'
                }
            
            newImage.save().then(()=>{res.send('image uploaded')}).catch((err)=>{
                console.log(err)
            })
        }
    })
})

module.exports= router