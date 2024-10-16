import { createContext, useReducer } from "react";

export const WorkOutsContext = createContext();

const workOutsReducer = (state, action) => {
  switch (action.type) {
    case "GET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkOutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workOutsReducer, {
    workouts: null,
  });

  return (
    <WorkOutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkOutsContext.Provider>
  );
};
