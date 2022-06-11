import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRouter from "./routes/Post.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDb");
  } catch (err) {
    throw err;
  }
};

//middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/post/", postRouter);
app.use("/api/auth/", authRouter);
app.use("/api/user/", userRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.Message || "something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("connected to backend");
});
