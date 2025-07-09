import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSchedules } from "./hooks/useSchedules";
import TodosCardList from "./TodosCardList";
import TodoForm from "./components/TodoForm";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import { dateFormat } from "./utils/dateUtils";

export default function Schedules() {
  const {
    schedules,
    selectedSchedule,
    loading,
    error,
    selectScheduleByDate,
    updateCheckedStatus,
    deleteTodo,
    deleteAllTodos,
    addTodo
  } = useSchedules();

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [currentSchedules, setCurrentSchedules] = useState(schedules || []);
  const [currentSelectedSchedule, setCurrentSelectedSchedule] = useState(selectedSchedule);

  useEffect(() => setCurrentSchedules(schedules || []), [schedules]);
  useEffect(() => setCurrentSelectedSchedule(selectedSchedule), [selectedSchedule]);

  const handleDateChange = date => {
    setCalendarDate(date);
    selectScheduleByDate(dateFormat(date));
  };

  if (loading) return <LoadingSpinner message="로딩 중..." />;
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="container" style={{ padding: "20px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>일정 관리</h2>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "30px", width: "380px", textAlign: "center" }}>
          <Calendar
            onChange={handleDateChange}
            value={calendarDate}
            locale="ko-KR"
            formatDay={(locale, date) => date.getDate()}
            tileClassName={({ date, view }) => {
              if (view !== "month") return null;
              const ds = dateFormat(date);
              return currentSchedules.some(s => s.date === ds && s.todos.length > 0)
                ? "has-schedule"
                : null;
            }}
          />
          <TodoForm calendarDate={dateFormat(calendarDate)} onAddTodo={addTodo} />
          <hr style={{ margin: "2rem 0" }} />
        </div>

        <div style={{ marginBottom: "2rem", width: "400px" }}>
          <h3 style={{ marginBottom: "1rem" }}>📅 {dateFormat(calendarDate)}</h3>
          {currentSelectedSchedule && (
            <button
              onClick={() => {
                if (window.confirm(`${dateFormat(calendarDate)}의 모든 일정을 삭제할까요?`)) {
                  deleteAllTodos(dateFormat(calendarDate));
                }
              }}
              disabled={loading}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "8px 12px",
                border: "none",
                borderRadius: "4px",
                marginBottom: "1rem",
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              전체 일정 삭제
            </button>
          )}

          {currentSelectedSchedule?.todos?.length > 0 ? (
            <>
              <hr style={{ margin: "2rem 0" }} />
              <TodosCardList
                todos={currentSelectedSchedule.todos}
                onCheckedUpdate={(time, checked) => updateCheckedStatus(time, checked)}
                onRemoved={(time) => deleteTodo(time)}
              />
            </>
          ) : (
            <p style={{ fontStyle: "italic", textAlign: "center", padding: "2rem", color: "#666" }}>
              이 날짜에 할 일이 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}