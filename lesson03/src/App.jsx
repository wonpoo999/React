import React, { useState, useRef } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

//Day03_04 : component refactoring 사용해서
//Day04_01 : children 속성 사용해서 완성함.
//                  useRef() hook으로 rerendering 횟수 비교 (App_V1.jsx)

// "HH:MM" → 분 단위 변환 함수
const timeToMinutes = (time) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

// 시간순 정렬 함수
const sortByTime = (list) => {
  return [...list].sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time))
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 수업 복습', checked: true, time: '09:00' },
    { id: 2, text: '리액트 프로젝트 기획', checked: false, time: '13:00' },
    { id: 3, text: '데이터베이스 테스트', checked: true, time: '15:00' },
  ])

  const nextId = useRef(4)

  const onInsert = (text, time) => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
      time,
    }
    nextId.current += 1
    setTodos((prev) => sortByTime([...prev, newTodo]))
  }

  const onRemove = (id) => {
    setTodos((prev) => sortByTime(prev.filter((todo) => todo.id !== id)))
  }

  const onChecked = (id) => {
    setTodos((prev) =>
      sortByTime(
        prev.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      )
    )
  }

  const onTimeChange = (id, newTime) => {
    setTodos((prev) =>
      sortByTime(
        prev.map((todo) =>
          todo.id === id ? { ...todo, time: newTime } : todo
        )
      )
    )
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onChecked={onChecked}
        onTimeChange={onTimeChange}
      />
    </TodoTemplate>
  )
}
