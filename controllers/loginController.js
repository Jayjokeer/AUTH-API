const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const userDB= require('../models/userDB')

const loginController = async(req,res)=>{
    const {email, password} = req.body
    
}