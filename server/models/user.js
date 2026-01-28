import bcrypt from 'bcrypt'; // it is used to secure password
import mongoose from 'mongoose';// used to connect node.js with mongodb
import validator from 'validator';// it is to validate user input 
import jwt from "jsonwebtoken"; // it is for authentication and authorization 
import crypto from "crypto"//it is used for cryptographic operation 
import { match } from 'assert';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim : true,
        maxLength : [50,"Name cannot excced 30 characters"]
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique : true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address"]
       
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select : false,
        minLength:[8 , "Password must be atleast 9 charcters long "]
     },
     role:{
        type:String,
        default:"Student",
        enum:["Student" , "Teacher " ,"Admin"]
     },
     resetPasswordToken:String,
     resetPasswordExpire:Date,
    
     department:{
        type:String,
        trim:true,
        default:null,
     },
       experties:{
        type:[String],
        default:[],
     },
       maxStudents:{
        type:Number,
        default:10,
        min:[1,"Min Students must be at least 1 "],
     },
      assignedStudents:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
    ],
    supervisor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    },
    project:{
          type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        default:null,
    },
},{
    timestamps:true,
}

)