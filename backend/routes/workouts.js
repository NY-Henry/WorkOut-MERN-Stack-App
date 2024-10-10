import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// Get all workouts
router.get("/", getAllWorkouts);

// Get a single workout
router.get("/:id", getSingleWorkout);

// Post a workout
router.post("/", createWorkout);

// Update a workout
router.put("/:id", updateWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

export default router;
