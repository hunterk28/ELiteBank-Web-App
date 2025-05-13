import express from 'express';
import { transferMoney,getTransactions } from '../controllers/transactionController.js';
import userAuth from '../middleware/userAuth.js';

const transactionRouter = express.Router();

transactionRouter.get('/', userAuth, getTransactions);
transactionRouter.post('/transfer', userAuth, transferMoney);


export default transactionRouter;
