import React, { useState } from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import '../assets/css/TodoListItem.scss'

export default function TodoListItem({ todo, number, onRemove, onChecked, onTimeChange }) {
  const { id, text, checked, time = '' } = todo
  const [editTime, setEditTime] = useState(time)

  const handleRemoveClick = () => {
    if (window.confirm(`일정 ${id}: ${text}를 삭제하시겠습니까?`)) {
      onRemove(id)
    }
  }

  const handleTimeChange = (e) => {
    const newTime = e.target.value
    setEditTime(newTime)
    onTimeChange(id, newTime)
  }

  return (
    <div className="TodoListItem">
      <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => onChecked(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">
          {text}
          <span className="time">{editTime ? `(${editTime})` : ''}</span>
          <span className="number">[{number}번]</span>
        </div>
      </div>

      <input
        type="time"
        className="timeInput"
        value={editTime}
        onChange={handleTimeChange}
      />

      <div className="remove" onClick={handleRemoveClick}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}
