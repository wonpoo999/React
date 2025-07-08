import React from "react";

export default function ScheduleDetail({ selectedSchedule, deleteAllTodos, loading }) {
  if (!selectedSchedule) return <div>일정을 선택해 주세요.</div>;

  const { date, todos } = selectedSchedule;

  return (
    <div>
      <h3>{date} 일정</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.time}>
            {todo.time} - {todo.text} [{todo.checked ? "완료" : "미완료"}]
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          if (window.confirm(`${date}의 모든 일정을 삭제할까요?`)) {
            deleteAllTodos(date);
          }
        }}
        disabled={loading}
        style={{ backgroundColor: "red", color: "white" }}
      >
        전체 일정 삭제
      </button>
    </div>
  );
}