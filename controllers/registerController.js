const bcrypt= require('bcrypt')
const userDB= require('../models/userDB')

const registerUser = async(req,res,next)=>{
    const  {firstname,lastname,email,username,password} = req.body;   
    if(!firstname||!lastname||!email||!username||!password)
        res.send('please provide all informations')
    
    const hashedpwd = await bcrypt.hash(password,10)
    const addUser= new userDB()
    addUser.firstname=firstname,
    addUser.lastname=lastname,
    addUser.email=email,
    addUser.username=username,
    addUser.password=hashedpwd
    
    try{ 
        const newUser =await addUser.save()
        .then(console.log('saved'))
        console.log(newUser)
                
    }catch(err){
        console.log(err)
                
    }
    
    next()
            
       
    
}
module.exports= registerUser
    
