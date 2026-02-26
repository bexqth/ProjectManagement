import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    color: String,
    tasksNumber: { 
        type: Number, 
        default: 0 
    }

}, {
    timestamps: true
});

const Project = model('Project', projectSchema);
export default Project;