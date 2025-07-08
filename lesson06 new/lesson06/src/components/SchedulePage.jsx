import React from "react";
import { useSchedules } from "../hooks/useSchedules";
import ScheduleDetail from "./ScheduleDetail";

export default function SchedulePage() {
  const {
    selectedSchedule,
    deleteAllTodos,
    loading,
    // 필요시 다른 함수 및 상태도 같이 사용 가능
  } = useSchedules();

  return (
    <div>
      {/* 달력, 일정 리스트 등 다른 UI 구성요소는 별도 구현 */}
      
      <ScheduleDetail
        selectedSchedule={selectedSchedule}
        deleteAllTodos={deleteAllTodos}
        loading={loading}
      />
    </div>
  );
}