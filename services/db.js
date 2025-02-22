import mongoose from "mongoose";

export const connectDB = async (uri) => {
    await mongoose.connect(uri, {
        dbName: "db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

