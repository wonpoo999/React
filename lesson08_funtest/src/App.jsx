// 파일: src/App.jsx

import React from "react";
import Quiz from "./Quiz";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <h1>웹 프로그래밍 퀴즈</h1>
        <div className="description">좌측의 카테고리를 선택하여 문제를 풀어보세요.</div>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
