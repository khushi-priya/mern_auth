import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb');
    
}).catch((err)=>{
    console.log(err);
    
});

const app=express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})