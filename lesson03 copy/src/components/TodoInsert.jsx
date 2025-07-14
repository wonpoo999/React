import { useState } from 'react'
import '../assets/css/TodoInsert.scss'

export default function TodoInsert({ onInsert }) {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return alert('일정을 입력하세요.')
    if (!time.trim()) return alert('시간을 입력하세요.')
    onInsert(text, time)
    setText('')
    setTime('')
  }

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">추가</button>
    </form>
  )
}
