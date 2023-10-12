const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    yearOfStudy:{
        type:String,
        required:true
    },
    isDualBooted:{
        type:Boolean,
        required:true
    },
    referralCode:{
        type:String,
        required:false
    },
});

module.exports=mongoose.model('user',UserSchema)