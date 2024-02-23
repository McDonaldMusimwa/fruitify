import mongoose from "mongoose";

async function dbConnect() {
    try {
        console.log("Database connected");
        await mongoose.connect(process.env.DATABASEURL!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection to database failed:", error);
        throw new Error('Connection failed');
    }
}

export default dbConnect;
