const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    laptop:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('user',UserSchema)