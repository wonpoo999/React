// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss"; // SCSS 스타일 파일 import

/**
 * main.jsx
 * - React 앱의 진입점
 * - App 컴포넌트를 root DOM 요소에 렌더링
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
