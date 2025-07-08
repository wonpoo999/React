import React from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import '../assets/css/TodoListItem.scss'

export default function TodoListItem({ todo, number, onRemove, onChecked, onTimeChange }) {
  const { id, text, checked, time = '' } = todo

  const handleTimeChange = (e) => {
    const newTime = e.target.value
    onTimeChange(id, newTime)
  }

  return (
    <div className="TodoListItem">
      <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => onChecked(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">
          {text}
          <span className="time">{time ? `(${time})` : ''}</span>
          <span className="number">[{number}번]</span>
        </div>
      </div>

      <input
        type="time"
        className="timeInput"
        value={time}
        onChange={handleTimeChange}
      />

      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}
