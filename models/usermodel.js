import mongoose from 'mongoose';
const userDataSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,trim:true},
    mobile:{type:Number},
    gender:{type:String,enum:['male','female'],default:'male'},
    password: { type: String, required: true, trim: true },
    account_verification_status: { type: Number, default: 2 },
},{
    timestamps:true,
    versionKey:false
})
const UserDataModel = mongoose.model("userData", userDataSchema);

export default UserDataModel;