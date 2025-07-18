// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss"; // SCSS 스타일
import "./index.css"; // ✅ body 스타일 따로 적용

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
