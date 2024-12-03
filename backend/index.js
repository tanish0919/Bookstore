import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

dotenv.config(); // Load environment variables
const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB;

// Connect to MongoDB using async/await to handle the promise properly
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect
  }
};

connectDB(); // Call the async function to connect to MongoDB

// Use the book routes
app.use("/book", bookRoute);
app.use("/user",userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
