const express= require('express')
const router= require('express').Router()
const db = require('../models/userDB')
const registerUser=require('../controllers/registerController')

router.get('/user/register',(req,res)=>{
    res.send('register')
})

router.post('/user/register',registerUser,(req,res)=>{
    res.send('user created')
})

module.exports= router