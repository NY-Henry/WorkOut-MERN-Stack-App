import express from "express";

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// Post a workout
router.post("/", (req, res) => {
  res.json({ message: "Post a workout" });
});

// Update a workout
router.put("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

export default router;
