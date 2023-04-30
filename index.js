require("./database/Todo");
import express from 'express';
import ConnectDB from './database/connection';
import cors from 'cors';
import helmet from 'helmet';


import Todo from './API/todo';

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());


app.use("/api/todo",Todo);

app.get("/",async(req,res)=>{
    try {
        return res.status(200).json({ message : "Success"});
    } catch (error) {
        return res.status(501).json({ Error : error});
    }
})

app.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
});