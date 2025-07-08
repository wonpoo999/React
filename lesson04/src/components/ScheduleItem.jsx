import React, { useState } from 'react'

export default function ScheduleItem({ schedule, onUpdate, onRemove }) {
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState({
    title: schedule.title,
    date: schedule.date,
    time: schedule.time,
  })

  const handleSave = () => {
    onUpdate(schedule._id, form)
    setEdit(false)
  }

  return (
    <tr>
      {edit ? (
        <>
          <td><input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></td>
          <td><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></td>
          <td><input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} /></td>
          <td>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setEdit(false)}>취소</button>
          </td>
        </>
      ) : (
        <>
          <td>{schedule.date}</td>
          <td>{schedule.title}</td>
          <td>{schedule.time}</td>
          <td>
            <button onClick={() => setEdit(true)}>수정</button>
            <button onClick={() => onRemove(schedule._id)}>삭제</button>
          </td>
        </>
      )}
    </tr>
  )
}
