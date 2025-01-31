import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    profilePicture:{
        type:String,
        default:"https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
    },
  
},{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;