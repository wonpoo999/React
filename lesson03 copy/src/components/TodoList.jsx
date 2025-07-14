import React from 'react'
import TodoListItem from './TodoListItem'
import '../assets/css/TodoList.scss'

export default function TodoList({ todos, onRemove, onChecked, onTimeChange }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          number={index + 1}
          onRemove={onRemove}
          onChecked={onChecked}
          onTimeChange={onTimeChange}
        />
      ))}
    </div>
  )
}
