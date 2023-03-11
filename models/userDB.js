const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:string
    }
})

module.exports= mongoose.model('userDB',userSchema)