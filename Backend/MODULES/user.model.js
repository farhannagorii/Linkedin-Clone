import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
{
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    headline:{
        type:String,
        default:""
    },

    profileimage:{
        type:String,
        default:""
    },

    coverimage:{
        type:String,
        default:""      
    },

    skills:[{
        type:String
    }],

    education:[
        {
            college:{ type:String },
            degree:{ type:String },
            fieldofstudy:{ type:String }
        }
    ],

    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },

    experience:[
        {
            title:{ type:String },
            company:{ type:String },
            description:{ type:String }
        }
    ],

    connections:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

},
{
    timestamps:true
}
);

let User = mongoose.model("User",userSchema);

export default User;