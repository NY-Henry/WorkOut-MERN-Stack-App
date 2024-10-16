import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// Get all workouts
export const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single workout
export const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }
  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create new workout
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // Check if any field is missing
  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (!load) {
    emptyFields.push("load");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "All fields are required", emptyFields });
  }

  // Add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a workOut
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "workout not found" });
  }

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout found" });
  }

  res.status(200).json(workout);
};

// Update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }

  const workOut = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!workOut) {
    return res.status(404).json({ error: "No such workout found" });
  }

  res.status(200).json({ message: "Workout updated successfully" });
};
