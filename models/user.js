import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: { type: String, unique: true, required: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const userModel = mongoose.model('user', userSchema)

export default userModel;