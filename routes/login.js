const express= require('express')
const router= require('express').Router()
const db = require('../models/userDB')

router.get('/user/login',(req,res)=>{
    res.send('login')
})
router.post('/user/login',(req,res)=>{

})

module.exports=router