import mongoose from 'mongoose';


const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
});

export const Todo = mongoose.model("todo", TodoSchema);