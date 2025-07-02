import { useRef, useState } from 'react'
import TodoList from './components/TodoList'

export default function App() {
  const initVal = [
    { id: 1, text: '리액트 수업 복습', checked: true },
    { id: 2, text: '리액트 프로젝트 기획', checked: false },
    { id: 3, text: '데이터베이스 테스트', checked: true }
  ]

  const [todos, setTodos] = useState(initVal)
  const [input, setInput] = useState('')
  const maxid = useRef(todos.length + 1)

  function handleChecked(id) {
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setTodos(newtodos)
  }

  function handleRemove(id) {
    const newtodos = todos.filter((item) => item.id !== id)
    setTodos(newtodos)
  }

  const handleInsert = (text) => {
    const todo = {
      id: maxid.current,
      text,
      checked: false
    }
    setTodos([...todos, todo])
    maxid.current += 1
  }

  // 🔽 form 제출 시 handleInsert 실행
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      handleInsert(input)
      setInput('')
    }
  }

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>

      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onChecked={handleChecked}
      />
    </div>
  )
}