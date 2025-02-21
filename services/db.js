import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

export const connectDB = async () => {
    await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

