import mongoose from 'mongoose';
export default async ()=>{
    return mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};