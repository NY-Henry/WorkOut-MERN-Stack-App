import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WorkOutsContextProvider } from "./context/WorkOutsContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WorkOutsContextProvider>
      <App />
    </WorkOutsContextProvider>
  </StrictMode>
);
