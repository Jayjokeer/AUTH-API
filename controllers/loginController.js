const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const userDB= require('../models/userDB')

const loginController = async(req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.send(' please input all fields')
    }else{
        const founduser = await userDB.find()
    }
}

module.exports= loginController