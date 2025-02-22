import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    id: String,
    title: String,
    note: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    collaboratorsId: { type: [String], default: [] }
})

const notesModel = mongoose.Model('notes', notesSchema)

export default notesModel