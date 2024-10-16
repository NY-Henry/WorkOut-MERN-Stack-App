import express from "express";
import dotenv from "dotenv";
import routes from "./routes/workouts.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT;

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MiddleWare
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", routes);

// connect to mongodb
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
    // listen for requests
    app.listen(PORT, () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
