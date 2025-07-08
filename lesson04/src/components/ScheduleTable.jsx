import React, { useEffect, useState } from 'react';

export default function ScheduleTableEx() {
  const [schedules, setSchedules] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/schedules')
      .then(res => res.json())
      .then(data => {
        setSchedules(data);
        setSelectedIdx(0);
      })
      .catch(console.error);
  }, []);

  if (schedules.length === 0) return <div>Loading...</div>;

  const selected = schedules[selectedIdx];

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', color: '#eee', backgroundColor: '#222' }}>
      <h2>📋 일정표 보기</h2>

      <div style={{ marginBottom: '1rem' }}>
        {schedules.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            disabled={idx === selectedIdx}
            style={{
              marginRight: 8,
              padding: '6px 12px',
              backgroundColor: idx === selectedIdx ? '#555' : '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: idx === selectedIdx ? 'not-allowed' : 'pointer'
            }}
          >
            {item.date}
          </button>
        ))}
      </div>

      <h3>{selected.date}</h3>

      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', color: '#eee', backgroundColor: '#333' }}>
        <thead>
          <tr style={{ backgroundColor: '#444' }}>
            <th>시간</th>
            <th>일정 내용</th>
          </tr>
        </thead>
        <tbody>
          {selected.todos.map((todo, idx) => (
            <tr key={idx}>
              <td>{todo.time}</td>
              <td>{todo.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
