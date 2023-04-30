import express from 'express';
import { Todo } from '../database/Todo';


const Router = express.Router();




Router.get("/",async(req,res)=>{
    try {
        const todo = await Todo.find();
        if(!todo || todo.length === 0){
            return res.status(200).json({ message : "Todo list Empty"});
        }
        return res.status(200).json({todo});
    } catch (error) {
        return res.status(501).json({ Error : error.message});
    }
});

Router.post("/",async(req,res)=>{
    try {
        const data = await Todo.create(req.body);

        if(!data){
            return res.status(200).json({message: "Failed to add todo" })
        }

        return res.status(200).json({message: "Todo added successfully", data});

    } catch (error) {
        return res.status(501).json({ Error : error.message});
    }
});

Router.put("/:_id",async(req,res)=>{
    try {
        const data = await Todo.findByIdAndUpdate(req.params._id, req.body, {new : true});
        if(!data || data.length === 0){
            return res.status(200).json({message: "Failed to update todo" })    
        }
        return res.status(200).json({message: "Todo updated successfully", data}); 

    } catch (error) {
        return res.status(501).json({ Error : error.message});
    }
});
Router.delete("/:_id",async(req,res)=>{
    try {
        const data = await Todo.findByIdAndDelete(req.params._id,{new :true});

        if(!data || data.length === 0){
            return res.status(200).json({message: "Failed to delete todo" })    
        }
        return res.status(200).json({message: "Todo deleted successfully", data}); 
    } catch (error) {
        return res.status(501).json({ Error : error.message});
    }
});


export default Router;
