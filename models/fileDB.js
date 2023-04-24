const mongoose =require ('mongoose')

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
})

module.exports = mongoose.model('fileDB',fileSchema)