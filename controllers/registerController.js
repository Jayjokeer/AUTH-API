const bcrypt= require('bcrypt')
const userDB= require('../models/userDB')
const nodemailer = require('nodemailer')





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
        //mail config
        const mailTransport = async()=>{
            const transporter = nodemailer.createTransport({
                service:'gmail',
                port:465,
                host:'smtp-mail.gmail .com',
                secure:true,
                auth:{
                    user:process.env.EMAIL_ADDRESS,
                    pass:process.env.EMAIL_PASS
                }
            })
            const info = await transporter.sendMail({
                from:process.env.EMAIL_ADDRESS,
                to:newUser.email, 
                subject:'WELCOME TO MY AUTH API',
                html:`<h1>Welcome ${newUser.lastname} to my Auth API, you have successfully registered </h1>`
    
            })
            console.log(info)
            
            
        }
        
        
            mailTransport().catch((err)=>{console.log(err)})
        next()        
    }catch(err){
        console.log(err)
                
    }
    
}

module.exports= registerUser

   
        
    