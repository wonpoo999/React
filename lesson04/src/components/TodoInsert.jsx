import { useState } from 'react'
import '../assets/css/TodoInsert.scss'

export default function TodoInsert({ onInsert }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return alert('할 일을 입력하세요.')
    onInsert(text)
    setText('')
  }

  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  )
}
