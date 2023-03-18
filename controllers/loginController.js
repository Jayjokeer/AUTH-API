const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const userDB= require('../models/userDB')

const loginController = async(req,res)=>{
    const {email, password} = req.body
    if(!email || !password)
        res.send(' please input all fields')
    
    const founduser = await userDB.findOne({email:email})
    if(!founduser)
        res.send('error user does not exist')
    
    const checkpwd= await bcrypt.compare(password,founduser.password) 
    if(!checkpwd)
        res.send('password not correct');        
    //res.json('logged in')
    console.log(founduser.password)
    const accessToken = jwt.sign(founduser.username,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
    const user= founduser.username
}

function authenticateToken(req,res,next){
    const bearerHeader= req.headers['authorization']
    const bearerToken = bearerHeader && bearerHeader.split(" ")[1]
    if(bearerToken==null) return res.sendStatus(401)
    jwt.verify(bearerToken,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) res.sendStatus(401)
       req.user= user
       
        next()
    })
}

module.exports= {loginController, authenticateToken};