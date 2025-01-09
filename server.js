import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome dosto</h1>");
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Handle server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`.cyan.bold);
});
