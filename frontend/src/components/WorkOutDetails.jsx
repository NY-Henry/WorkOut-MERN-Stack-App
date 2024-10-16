import { useWorkOutsContext } from "../hooks/useWorkOutsContext";

// Date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkOutDetails = ({ workout }) => {
  const { dispatch } = useWorkOutsContext();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (!res.ok) {
      console.log(data.error);
    } else {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };

  return (
    <div className=" p-4 rounded-lg relative shadow-lg my-4">
      <h2 className="text-xl font-bold">{workout.title}</h2>
      <p className="text-slate-700 text-lg">
        <strong>Load (Kg):</strong> {workout.load}
      </p>
      <p className="text-slate-700 text-lg">
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p className="text-slate-700 text-sm">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <button
        onClick={handleDelete}
        className="text-3xl absolute top-4 right-6 font-bold
      text-gray-500 hover:text-gray-700 active:scale-95
      "
      >
        X
      </button>
    </div>
  );
};

export default WorkOutDetails;
