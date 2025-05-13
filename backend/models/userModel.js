import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {type: String,required: true},
    lastname: {type: String,required: true},
    phoneno: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    address: {type: String,required: false},
    province: {type: String,required: false},
    birth: {type: String,required: false},
    cnic: {type: String,required: false},
    verifyOtp: {type: String,default: ''},
    verifyOtpExpireAt: {type: Number,default: 0},
    isAccountVerified: {type: Boolean,default: false},
    resetOtp: {type: String,default: ''},
    resetOtpExpireAt: {type: Number,default: ''},
    balance: {
        type: Number,
        default: 5000,
        min: 0
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
})

const userModel=mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;