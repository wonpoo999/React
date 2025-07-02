import { useEffect, useRef, useState } from "react";

function App() {
  // 초기 할일 목록
  const initVal = [
    { id: 1, text: "리액트 수업 복습", checked: true },
    { id: 2, text: "리액트 프로젝트 기획", checked: false },
    { id: 3, text: "데이터베이스 테스트", checked: true },
  ];

  const [todos, setTodos] = useState(initVal);
  const maxid = useRef(initVal.length + 1); // ✔️ ID 증가용으로 사용

  // useEffect: 상태 변경 시 로그 확인용
  useEffect(() => {
    console.log("todos:", todos);
  }, [todos]);

  // ✅ 할일 삭제
  function handleRemove(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  // ✅ 체크 상태 토글
  function handleChecked(id) {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodos(newTodos);
  }

  // ✅ 할일 추가
  function handleInsert(text) {
    const newTodo = {
      id: maxid.current++, // ✔️ maxid로 고유 ID 생성
      text,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <button onClick={() => handleChecked(1)}>id=1 checked 값 변경</button>
      <button onClick={() => handleChecked(2)}>id=2 checked 값 변경</button>
      <button onClick={() => handleChecked(3)}>id=3 checked 값 변경</button>
      <button onClick={() => handleInsert("웹기초 공부")}>새로운 할일 추가</button>
      <button onClick={() => handleRemove(2)}>id=2 할일 삭제</button>
      <button onClick={() => handleRemove(4)}>id=4 할일 삭제</button>
    </div>
  );
}

export default App;