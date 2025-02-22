import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    authorId: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    collaboratorsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users", // Reference to users model (optional)
        // required: true
    }
})

const notesModel = mongoose.model('notes', notesSchema)

export default notesModel