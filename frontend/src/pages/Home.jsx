import React, { useEffect } from "react";
import { useWorkOutsContext } from "../hooks/useWorkOutsContext";
import NavBar from "../components/NavBar";
import WorkOutDetails from "../components/WorkOutDetails";
import WorkOutForm from "../components/WorkOutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkOutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/workouts");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error);
        } else {
          dispatch({ type: "GET_WORKOUTS", payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <section className="max-w-[1400px] p-[20px] m-auto">
      <NavBar />
      <div className="mt-3 grid grid-cols-1 space-y-2 gap-4 md:grid-cols-4">
        <div className="md:col-span-3">
          {workouts &&
            workouts.map((workout) => (
              <WorkOutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <div>
          <WorkOutForm />
        </div>
      </div>
    </section>
  );
};

export default Home;
