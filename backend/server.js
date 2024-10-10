import express from "express";
import dotenv from "dotenv";
import routes from "./routes/workouts.js";
dotenv.config();

const PORT = process.env.PORT;

// express app
const app = express();

// middleware
app.use(express.json());

// MiddleWare
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", routes);

// listen for requests
app.listen(4000, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
