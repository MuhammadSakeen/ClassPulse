const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        console.log("Proceeding without active MongoDB connection. (Update MONGO_URI in .env or start local MongoDB service)");
    }
};

module.exports = connectDB;
