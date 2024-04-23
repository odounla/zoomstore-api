const dotenv = require("dotenv");
require("express-async-errors");
const mongoose = require("mongoose");
dotenv.config();
mongoose.set("strictQuery", false);
//import express and assign to variable

const express = require("express");
const app = express();

//rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//database
const connectDB = require("./db/connect");

//routes

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("zoomstore api");
});

app.use("/api/v1/auth", authRouter);
app.use("api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();