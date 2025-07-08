import React, { useState } from 'react'

export default function ScheduleInsert({ onAdd }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !date || !time) return alert('모든 항목을 입력하세요!')
    onAdd({ title, date, time })
    setTitle('')
    setDate('')
    setTime('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input type="text" placeholder="일정 제목" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  )
}
