import express from 'express'
import { adminLogin, isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/authcontroller.js';
import userAuth from '../middleware/userAuth.js';

const authRouter= express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/admin-login',adminLogin);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);
authRouter.get('/is-auth',userAuth,isAuthenticated);
authRouter.post('/send-reset-otp',sendResetOtp);
authRouter.post('/reset-password',resetPassword);


export default authRouter;