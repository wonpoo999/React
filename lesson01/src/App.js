import logo from './logo.svg';    // 이미지 파일 IMPORT 변수명 LOGO로 지정.,
import './App.css';


// DAY1 _ 1 : JSX 문법 맞보기
function App() {
  // 좌측에 이 주석 기호는 자바스크립트 주석
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 문자열 연결은 backtick */}
        {/* {달러 $ 표시 대신 중가로로 가져오기} */}
        {/* JavaScript X는  주석이 위 자바스크립트 주석이랑은 달라 */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// 
