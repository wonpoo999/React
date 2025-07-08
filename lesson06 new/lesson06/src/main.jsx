import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Schedules from "./Schedules";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Schedules />
  </React.StrictMode>
);