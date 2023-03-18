const express= require('express')
const router= require('express').Router()
const db = require('../models/userDB')
const {authenticateToken,loginController}= require('../controllers/loginController')

router.get('/user/login',(req,res)=>{
    res.send('login')
})
router.post('/user/login',loginController,(req,res)=>{

})
router.get('/user/protect',authenticateToken,(req,res,)=>{
    res.json({message:'access granted' })
})
module.exports=router