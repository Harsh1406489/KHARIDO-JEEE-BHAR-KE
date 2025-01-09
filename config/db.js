import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`.red);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
