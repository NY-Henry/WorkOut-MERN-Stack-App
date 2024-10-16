import React, { useState } from "react";
import { useWorkOutsContext } from "../hooks/useWorkOutsContext";

const WorkOutForm = () => {
  const [workout, setWorkout] = useState({
    title: "",
    reps: "",
    load: "",
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useWorkOutsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      });

      const data = await res.json();

      if (!res.ok) {
        setEmptyFields(data.emptyFields);
        throw new Error(data.error);
      }
      if (res.ok) {
        setError(null);
        setWorkout({ title: "", reps: "", load: "" });
        dispatch({ type: "CREATE_WORKOUT", payload: data });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-md mt-2 grid grid-cols-1 space-y-4 p-4"
    >
      <h3 className="text-2xl font-bold text-center">Add a new WorkOut</h3>
      {/* Title */}
      <label>
        Exercise Title:
        <input
          className={` ${
            emptyFields.includes("title") ? "border-red-500" : ""
          } border rounded-md p-1 w-full`}
          type="text"
          value={workout.title}
          onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        />
      </label>
      {/* Load */}
      <label>
        Load (kg):
        <input
          className={` ${
            emptyFields.includes("load") ? "border-red-500" : ""
          } border rounded-md p-1 w-full`}
          type="number"
          value={workout.load}
          onChange={(e) => setWorkout({ ...workout, load: e.target.value })}
        />
      </label>
      {/* Reps */}
      <label>
        Reps:
        <input
          className={`${
            emptyFields.includes("reps") ? "border-red-500" : ""
          } border rounded-md p-1 w-full`}
          type="number"
          value={workout.reps}
          onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
        />
      </label>
      <button
        className="bg-gradient-to-r from-teal-400 to-sky-500 text-white p-2 rounded-md mt-2 w-full"
        type="submit"
      >
        Add WorkOut
      </button>
      {error && (
        <div
          className="bg-red-100 border mt-10 border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
    </form>
  );
};

export default WorkOutForm;
