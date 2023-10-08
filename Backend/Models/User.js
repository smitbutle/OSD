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
    yearofstudy:{
        type:String,
        required:true
    },
    dualLaptop:{
        type:Boolean,
        required:true
    },
});

module.exports=mongoose.model('user',UserSchema)