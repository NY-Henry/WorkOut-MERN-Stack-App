import { WorkOutsContext } from "../context/WorkOutsContext";
import { useContext } from "react";

export const useWorkOutsContext = () => {
  const context = useContext(WorkOutsContext);

  if (!context) {
    throw new Error(
      "useWorkOutsContext must be used within a WorkOutsContextProvider"
    );
  }

  return context;
};
