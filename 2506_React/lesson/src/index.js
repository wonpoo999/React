import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from '../component/App2;'
// import는 외부 파일의 함수, 라이브러리 사용할 때 미리 가져와 알려주는 것이니라
//어떻게 보면 메모리에 로드해서 가져오는 거라 볼 수 있지. 

// App은 화면을 구성하는 component 이름
const root = ReactDOM.createRoot(document.getElementById('root'));
// App Component에서 정의한 요소들을 createElement, appendChild 실행
// => root.render(). React 최신버전은 React.StrictMode를 사용(개발과정 오류를 체크한다)
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
    {/* 테스트용 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 테스트용이 별도로 있어서 함수로 구현. 실제로 화면에 돌리기 전에(확인하기 전에) component를 테스트하는 것이다.
reportWebVitals();
